/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: "users",
  attributes: {
    name: {
      type: "string",
      required: true,
    },
    email: {
      type: "string",
      unique: true,
      required: true,
    },
    password: {
      type: "string",
      allowNull: true,
    },

    orders: {
      collection: "order",
      via: "userId",
    },
  },
  customJSON: function () {
    return _.omit(this, ["password"]);
  },
  beforeCreate: async function (values, proceed) {
    const hashedPassword = await sails.helpers.passwords.hashPassword(
      values.password
    );
    values.password = hashedPassword;

    return proceed();
  },
};
