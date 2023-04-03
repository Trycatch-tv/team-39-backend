export default () => ({
  app: {
    workingDirectory: process.env.PWD || process.cwd(),
  },
  mail: {
    defaultName: 'noreply',
    defaultEmail: 'noreply@crisego.com',
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    ignoreTLS: process.env.MAIL_IGNORETLS,
    secure: process.env.MAIL_SECURE,
    requireTLS: process.env.MAIL_REQUIRETLS,
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD,
  },
  server: {
    env: process.env.NODE_ENV,
    port: parseInt(process.env.PORT, 10) || 3000,
    url: process.env.URL,
    allowed_sources: process.env.ALLOWED_SOURCES?.split(','),
  },
  database: {
    name: process.env.DB_NAME || 'role_app',
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT, 10) || 3306,
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'admin',
  },
});
