const InvariantError = require('../../exceptions/InvariantError');
const { SongPostPayloadSchema, SongPutPayloadSchema } = require('./schema');

const SongsValidator = {
  validatePostSongPayload: (payload) => {
    const validationResult = SongPostPayloadSchema.validate(payload);
    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },

  validatePutSongPayload: (payload) => {
    const validationResult = SongPutPayloadSchema.validate(payload);
    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
};

module.exports = SongsValidator;
