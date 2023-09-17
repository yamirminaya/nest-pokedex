export const EnvConfiguration = () => ({
  environment: process.env.NODE_ENV || 'dev',
  mondodb: process.env.MONGODB,
  port: process.env.PORT || 3002,
  default_limit: process.env.DEFAULT_LIMIT || 7,
});
