const { nanoid } = require('nanoid');

class AlbumsService {
  constructor() {
    this._albums = [];
  }

  addAlbum({ name, year }) {
    const id = nanoid(16);
    const createdAt = new Date().toISOString();
    const updateAt = createdAt;

    const newAlbum = {
      name,
      year,
      id,
      createdAt,
      updateAt,
    };

    this._albums.push(newAlbum);

    const isSuccess =
      this._albums.filter((album) => album.id === id).length > 0;

    if (!isSuccess) {
      throw new Error('Album gagal ditambahkan');
    }

    return id;
  }

  getAlbumById(id) {
    const album = this._albums.filter((a) => a.id === id)[0];

    if (!album) {
      throw new Error('Album tidak ditemukan');
    }
    return album;
  }

  editAlbumById(id, { name, year }) {
    const index = this._albums.findIndex((album) => album.id === id);

    if (index === -1) {
      throw new Error('Gagal memperbarui album. Id tidak ditemukan');
    }

    const updateAt = new Date().toISOString();

    this._albums[index] = {
      ...this._albums[index],
      name,
      year,
      updateAt,
    };
  }

  deleteAlbumById(id) {
    const index = this._albums.findIndex((album) => album.id === id);

    if (index === -1) {
      throw new Error('Album gagal dihapus. Id tidak ditemukan');
    }

    this._albums.splice(index, 1);
  }
}

module.exports = AlbumsService;
