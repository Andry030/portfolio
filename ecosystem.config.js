module.exports = {
  apps: [{
    name:    'andry-portfolio',
    script:  'node_modules/.bin/next',
    args:    'start -p 7000',
    cwd:     '/var/www/andry.ink',
    env_production: { NODE_ENV: 'production', PORT: 7000 },
    instances:   1,
    exec_mode:  'fork',
    max_memory_restart: '300M',
    autorestart: true,
    log_date_format: 'YYYY-MM-DD HH:mm:ss',
    error_file: '/var/log/pm2/andry-error.log',
    out_file:   '/var/log/pm2/andry-out.log',
  }],
};
