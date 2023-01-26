const InvariantError = require('../../exceptions/InvariantError');
const { AlbumPostPayloadSchema, AlbumPutPayloadSchema } = require('./schema');

const AlbumsValidator = {
  validatePostAlbumPayload: (payload) => {
    const validationResult = AlbumPostPayloadSchema.validate(payload);
    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },

  validatePutAlbumPayload: (payload) => {
    const validationResult = AlbumPutPayloadSchema.validate(payload);
    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
};

module.exports = AlbumsValidator;
