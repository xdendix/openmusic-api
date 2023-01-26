const Hapi = require('@hapi/hapi');
const albums = require('./api/albums');
const songs = require('./api/songs');

/* Albums */
const AlbumsService = require('./service/inMemory/AlbumsService');

/* Songs */
const SongsService = require('./service/inMemory/SongsService');

const init = async () => {
  const albumsService = new AlbumsService();
  const songsService = new SongsService();
  const server = Hapi.server({
    port: 5000,
    host: 'localhost',
  });

  await server.register({
    plugin: albums,
    options: {
      service: albumsService,
    },
  });

  await server.register({
    plugin: songs,
    options: {
      service: songsService,
    },
  });

  await server.start();
  console.log(`Server running on port ${server.info.uri}`);
};

init();
