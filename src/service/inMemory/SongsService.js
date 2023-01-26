const { nanoid } = require('nanoid');

class SongsService {
  constructor() {
    this._songs = [];
  }

  addSong({ title, year, genre, performer, duration, albumId }) {
    const id = nanoid(16);
    const createdAt = new Date().toISOString();
    const updatedAt = createdAt;

    const newSong = {
      id,
      title,
      year,
      performer,
      genre,
      duration,
      albumId,
      createdAt,
      updatedAt,
    };

    this._songs.push(newSong);

    const isSuccess = this._songs.filter((song) => song.id === id).length > 0;

    if (!isSuccess) {
      throw new Error('Lagu gagal ditambahkan');
    }

    return id;
  }

  getAllSongs() {
    return this._songs;
  }

  getSongById(id) {
    const song = this._songs.filter((s) => s.id === id)[0];

    if (!song) {
      throw new Error('Lagu tidak ditemukan');
    }

    return song;
  }

  editSongById(id, { title, year, performer, genre, duration, albumId }) {
    const index = this._songs.findIndex((song) => song.id === id);

    if (index === -1) {
      throw new Error('Gagal memperbarui lagu. Id tidak ditemukan');
    }

    const updatedAt = new Date().toISOString();

    this._songs[index] = {
      ...this._songs[index],
      title,
      year,
      performer,
      genre,
      duration,
      albumId,
      updatedAt,
    };
  }

  deleteSongById(id) {
    const index = this._songs.findIndex((song) => song.id === id);

    if (index === -1) {
      throw new Error('Lagu gagal dihapus. Id tidak ditemukan');
    }

    this._songs.splice(index, 1);
  }
}

module.exports = SongsService;
