module.exports = {
  friendlyName: "Register",

  description: "Register Users.",

  inputs: {
    name: {
      type: "string",
      required: true,
    },
    email: {
      type: "string",
      required: true,
      unique: true,
      isEmail: true,
    },
    password: {
      type: "string",
      required: true,
      minLength: 4,
    },
  },

  exits: {
    success: {
      statusCode: 201,
    },
    emailAlreadyInUse: {
      statusCode: 400,
    },
    error: {
      statusCode: 500,
    },
  },

  fn: async function (inputs, exits) {
    try {
      const email = inputs.email.toLowerCase();

      const newUser = await User.create({
        name: inputs.name,
        email,
        password: inputs.password,
      }).fetch();

      return exits.success({ message: "User created successfully!" });
    } catch (error) {
      if (error.code === "E_UNIQUE") {
        return exits.emailAlreadyInUse({ message: "Email already in use!" });
      }
      return exits.error({ message: "Something Went Wrong!" });
    }
  },
};
