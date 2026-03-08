import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Simple in-memory rate limiting (replace with Redis for production)
const rateMap = new Map<string, { count: number; reset: number }>();

function rateLimit(ip: string): boolean {
  const now   = Date.now();
  const entry = rateMap.get(ip);
  if (!entry || entry.reset < now) {
    rateMap.set(ip, { count: 1, reset: now + 15 * 60 * 1000 });
    return true;
  }
  if (entry.count >= 5) return false;
  entry.count++;
  return true;
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for') ?? '0.0.0.0';

  if (!rateLimit(ip)) {
    return NextResponse.json(
      { error: 'Trop de requêtes. Réessayez dans 15 minutes.' },
      { status: 429 }
    );
  }

  let body: Record<string, string>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Corps invalide.' }, { status: 400 });
  }

  const { name, email, subject, message } = body;

  // Validation
  if (!name?.trim() || name.trim().length < 2)           return NextResponse.json({ error: 'Nom invalide.' }, { status: 400 });
  if (!email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return NextResponse.json({ error: 'Email invalide.' }, { status: 400 });
  if (!subject?.trim() || subject.trim().length < 3)     return NextResponse.json({ error: 'Sujet invalide.' }, { status: 400 });
  if (!message?.trim() || message.trim().length < 10)    return NextResponse.json({ error: 'Message trop court.' }, { status: 400 });

  const safeName    = name.trim().slice(0, 100);
  const safeEmail   = email.trim().slice(0, 200);
  const safeSubject = subject.trim().slice(0, 200);
  const safeMsg     = message.trim().slice(0, 3000);

  // Nodemailer — requires SMTP env vars
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO } = process.env;
  if (!SMTP_USER || !SMTP_PASS) {
    console.warn('[contact] SMTP non configuré');
    return NextResponse.json({ error: 'Email non configuré côté serveur.' }, { status: 500 });
  }

  const transporter = nodemailer.createTransport({
    host:   SMTP_HOST ?? 'smtp.gmail.com',
    port:   parseInt(SMTP_PORT ?? '587'),
    secure: false,
    auth:   { user: SMTP_USER, pass: SMTP_PASS },
  });

  try {
    await transporter.sendMail({
      from:    `"andry.ink" <${SMTP_USER}>`,
      to:      CONTACT_TO ?? SMTP_USER,
      replyTo: safeEmail,
      subject: `[andry.ink] ${safeSubject}`,
      html: `
        <div style="font-family:sans-serif;max-width:580px;margin:0 auto;">
          <h2 style="color:#c2622d;">Nouveau message — andry.ink</h2>
          <p><strong>De&nbsp;:</strong> ${safeName} &lt;${safeEmail}&gt;</p>
          <p><strong>Sujet&nbsp;:</strong> ${safeSubject}</p>
          <hr/>
          <pre style="white-space:pre-wrap;font-family:inherit;">${safeMsg}</pre>
        </div>`,
    });

    await transporter.sendMail({
      from:    `"ANDRIANAIVO Noé" <${SMTP_USER}>`,
      to:      safeEmail,
      subject: 'Merci pour votre message — andry.ink',
      html: `
        <div style="font-family:sans-serif;max-width:580px;margin:0 auto;">
          <h2 style="color:#c2622d;">Merci, ${safeName} !</h2>
          <p>J'ai bien reçu votre message et vous répondrai sous 24–48h.</p>
          <p style="color:#999;">— ANDRIANAIVO Noé · <a href="https://andry.ink">andry.ink</a></p>
        </div>`,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[contact]', err);
    return NextResponse.json({ error: 'Erreur serveur.' }, { status: 500 });
  }
}
