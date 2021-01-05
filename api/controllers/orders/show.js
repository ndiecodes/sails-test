module.exports = {
  friendlyName: "Show",

  description: "Show orders.",

  inputs: {},

  exits: {},

  fn: async function (_, exits) {
    try {
      const orders = await Order.find();

      exits.success(orders);
    } catch (error) {
      console.log(error);
      return exits.error({ message: "Something Went Wrong!" });
    }
  },
};
