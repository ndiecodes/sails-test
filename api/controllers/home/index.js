module.exports = {
  friendlyName: "Index",

  description: "Index home.",

  inputs: {},

  exits: {},

  fn: async function (_, exits) {
    // All done.
    exits.success({ message: "Welcome to index of API!" });
  },
};
