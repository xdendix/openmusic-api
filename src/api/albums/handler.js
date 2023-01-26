const autoBind = require('auto-bind');

class AlbumsHandler {
  constructor(albumsService) {
    this._albumsService = albumsService;

    autoBind(this);
  }

  postAlbumHandler(request, h) {
    try {
      const { name, year } = request.payload;

      const albumId = this._albumsService.addAlbum({ name, year });

      const response = h.response({
        status: 'success',
        message: 'Album berhasil ditambahkan',
        data: {
          albumId,
        },
      });
      response.code(201);
      return response;
    } catch (error) {
      const response = h.response({
        status: 'fail',
        message: error.message,
      });
      response.code(400);
      return response;
    }
  }

  getAlbumByIdHandler(request, h) {
    try {
      const { id } = request.params;
      const album = this._albumsService.getAlbumById(id);
      return {
        status: 'success',
        data: {
          album,
        },
      };
    } catch (error) {
      const response = h.response({
        status: 'fail',
        message: error.message,
      });
      response.code(404);
      return response;
    }
  }

  putAlbumByIdHandler(request, h) {
    try {
      const { id } = request.params;

      this._albumsService.editAlbumById(id, request.payload);

      return {
        status: 'success',
        message: 'Album berhasil diperbarui',
      };
    } catch (error) {
      const response = h.response({
        status: 'fail',
        message: error.message,
      });
      response.code(404);
      return response;
    }
  }

  deleteAlbumByIdHandler(request, h) {
    try {
      const { id } = request.params;
      this._albumsService.deleteAlbumById(id);
      return {
        status: 'success',
        message: 'Album berhasil dihapus',
      };
    } catch (error) {
      const response = h.response({
        status: 'fail',
        message: error.message,
      });
      response.code(404);
      return response;
    }
  }
}

module.exports = AlbumsHandler;
