export const EnvConfiguration = () => ({
  environment: process.env.NODE_ENV || 'dev',
  mongodb: process.env.MONGODB,
  port: process.env.PORT || 3000, // ainda não funciona
  defaultLimit: process.env.DEFAULT_LIMIT || 10,
});
