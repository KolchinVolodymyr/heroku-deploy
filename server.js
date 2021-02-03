const Path = require('path');
const Hapi = require('@hapi/hapi');

// create the Hapi server
const сonfigure = {
  port: process.env.PORT || 3000,
  //port: config.get('port') || 8000,
  routes: {
    cors: {
      origin: ['*'],
      credentials: true
    },
    files: {
      relativeTo: Path.join(__dirname, 'build'),
    },
  }
};

const server = new Hapi.server(сonfigure);


// Register the inert plugin
async function start() {
  // register plugins to server instance
  await server.register([
    {
      plugin: require('@hapi/inert')
    },
    {
      plugin: require('@hapi/cookie')
    },

    {
      plugin: require('./api/plugins/settingCookie')
    },
    {
      plugin: require('./api/plugins/connectMongoose')
    },
     {
       plugin: require('./api/plugins/loadAllRoutes')
     }
  ]);

  // Create the route for the build artefacts
  server.route({
    method: 'GET',
    path: '/{path*}',
    handler: {
      directory: {
        path: '.',
        redirectToSlash: true,
        lookupCompressed: true,
        index: true,
      },
    },
  })


  try {
    server.start();
    console.log('Server running at:', server.info.uri);
  } catch (e) {
    console.error('Cannot run server', e);
  }
}

// Redirect all http requests to https if in production
/* eslint-disable consistent-return */
if (process.env.NODE_ENV === 'production') {
  server.ext('onRequest', (request, reply) => {
    if (request.headers['x-forwarded-proto'] !== 'https') {
      return reply('Forwarding to secure route').redirect(
        `https://${request.headers.host}${request.path}${request.url.search}`
      );
    }
    return reply.continue;
  });
}


// Setting index.html as the default
server.ext('onPreResponse', (request, reply) => {
  const response = request.response;

  if (!response.isBoom) {
    return reply.continue ;
  }

  // else an error has occurred
  const error = response;

  // if the error is 'Object not found', call index.html
  if (error.output.statusCode === 404) {
    return reply.response({key: "home value"});
  }
})

// Start server
start()
