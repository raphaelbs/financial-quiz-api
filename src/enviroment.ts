export const Environment = {
  MONGO_CONNECTOR:
    process.env.MONGO_CONNECTOR || 'mongodb://localhost/financialquiz',
  PORT: process.env.PORT || 3000,
};
