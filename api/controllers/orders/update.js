module.exports = {
  friendlyName: "Update",

  description: "Update orders.",

  inputs: {
    status: {
      type: "string",
      required: true,
      isIn: ["pending", "shipped", "completed", "failed"],
    },
  },

  exits: {
    notFound: {
      statusCode: 404,
    },
  },

  fn: async function (inputs, exits) {
    try {
      var updatedOrder = await Order.updateOne({ id: this.req.params.id }).set({
        status: inputs.status,
      });

      if (!updatedOrder) {
        exits.notFound({ message: "Order Not found!" });
      }

      return exits.success(updatedOrder);
    } catch (error) {
      console.log(error);
      return exits.error({ message: "Something Went Wrong!" });
    }
  },
};
