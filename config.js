const env = process.env;

export default {
    port: env.PORT || 3000,
    host: env.HOST || '0.0.0.0',
    nodeEnv: env.NODE_ENV || 'development'
};