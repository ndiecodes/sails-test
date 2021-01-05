module.exports = {
  friendlyName: "Show single",

  description: "",

  inputs: {},

  exits: {
    notFound: {
      statusCode: 404,
    },
  },

  fn: async function (_, exits) {
    try {
      const order = await Order.findOne({ id: this.req.params.id });

      if (!order) {
        return exits.notFound({ message: "Order Not Found" });
      }
      exits.success({ order });
    } catch (error) {
      console.log(exits);
      return exits.error({ message: "Something Went Wrong!" });
    }
  },
};
