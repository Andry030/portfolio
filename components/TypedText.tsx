'use client';
import { useEffect, useState } from 'react';
import { TAGLINES } from '@/lib/data';

export default function TypedText() {
  const [text, setText]     = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [charIdx, setCharIdx]   = useState(0);

  useEffect(() => {
    const word = TAGLINES[wordIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting) {
      if (charIdx < word.length) {
        timeout = setTimeout(() => {
          setText(word.slice(0, charIdx + 1));
          setCharIdx(i => i + 1);
        }, 75);
      } else {
        timeout = setTimeout(() => setDeleting(true), 2200);
      }
    } else {
      if (charIdx > 0) {
        timeout = setTimeout(() => {
          setText(word.slice(0, charIdx - 1));
          setCharIdx(i => i - 1);
        }, 38);
      } else {
        setDeleting(false);
        setWordIdx(i => (i + 1) % TAGLINES.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx]);

  return (
    <span className="font-medium" style={{ color: 'var(--text)' }}>
      {text}
      <span className="cursor" />
    </span>
  );
}
