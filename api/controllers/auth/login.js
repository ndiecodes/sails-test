module.exports = {
  friendlyName: "Login",

  description: "Login auth.",

  inputs: {
    email: {
      type: "string",
      required: true,
      isEmail: true,
    },
    password: {
      type: "string",
      required: true,
    },
  },

  exits: {
    invalidCredentials: {
      statusCode: 401,
    },
  },

  fn: async function (inputs, exits) {
    try {
      const user = await User.findOne({ email: inputs.email });

      if (!user) {
        return exits.invalidCredentials({ message: "Invalid Credentials09!" });
      }

      const validPassword = await sails.helpers.passwords
        .checkPassword(inputs.password, user.password)
        .intercept("incorrect", (_) => {
          exits.invalidCredentials({ message: "Invalid Credentials!" });
        });

      const token = await sails.helpers.generateNewJwtToken(user.email);

      return exits.success({
        data: {
          user,
          token,
        },
      });
    } catch (error) {
      console.log(error);
      return exits.error({ message: "Something went wrong!" });
    }
  },
};
