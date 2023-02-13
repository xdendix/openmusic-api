const InvariantError = require('../../exceptions/InvariantError');
const { UserPostPayloadSchema } = require('./schema');

const UsersValidator = {
  validateUserPostPayload: (payload) => {
    const validationResult = UserPostPayloadSchema.validate(payload);

    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
};

module.exports = UsersValidator;
