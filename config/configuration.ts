export default () => ({
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
