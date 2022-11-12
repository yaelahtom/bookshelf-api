const Hapi = require('@hapi/hapi');

const init = async () => {
  const server = Hapi.server({
    port: 3001,
    host: 'localhost',
  });

  await server.start();
  console.log('server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
