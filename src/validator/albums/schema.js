const Joi = require('joi');

const AlbumPostPayloadSchema = Joi.object({
  name: Joi.string().required(),
  year: Joi.number().required(),
});

const AlbumPutPayloadSchema = Joi.object({
  name: Joi.string().required(),
  year: Joi.number().required(),
});

module.exports = { AlbumPostPayloadSchema, AlbumPutPayloadSchema };
