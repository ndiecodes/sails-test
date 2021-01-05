module.exports = {
  friendlyName: "Show",

  description: "Show orders.",

  inputs: {},

  exits: {},

  fn: async function (_, exits) {
    try {
      const currentUser = this.req.user;
      const orders = await Order.find({ userId: currentUser.id });

      exits.success(orders);
    } catch (error) {
      console.log(error);
      return exits.error({ message: "Something Went Wrong!" });
    }
  },
};
