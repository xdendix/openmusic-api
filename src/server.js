/* environtment */
require('dotenv').config();

const Hapi = require('@hapi/hapi');
const albums = require('./api/albums');
const songs = require('./api/songs');

/* Albums */
const AlbumsService = require('./service/postgres/AlbumsService');
const AlbumsValidator = require('./validator/albums');

/* Songs */
const SongsService = require('./service/postgres/SongsService');
const SongsValidator = require('./validator/songs');

const init = async () => {
  const albumsService = new AlbumsService();
  const songsService = new SongsService();
  const server = Hapi.server({
    port: process.env.PORT,
    host: process.env.HOST,
  });

  await server.register({
    plugin: albums,
    options: {
      service: albumsService,
      validator: AlbumsValidator,
    },
  });

  await server.register({
    plugin: songs,
    options: {
      service: songsService,
      validator: SongsValidator,
    },
  });

  await server.start();
  console.log(`Server running on port ${server.info.uri}`);
};

init();
