module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        host: env('_HOST'),
        srv: env.bool('_SRV'),
        port: env.int('_PORT'),
        database: env('_NAME'),
        username: env('_USERNAME'),
        password: env('_PASSWORD'),
      },
      options: {
        authentication: env('AUTHENTICATION_', 'admin'),
        ssl: env.bool('_SSL', true),
      },
    },
  },
});
