module.exports = {
  friendlyName: "Create",

  description: "Create orders.",

  inputs: {
    itemName: {
      type: "string",
    },
    quantity: {
      type: "number",
    },
  },

  exits: {},

  fn: async function (inputs, exits) {
    try {
      const order = await Order.create({
        itemName: inputs.itemName,
        quantity: inputs.quantity,
      }).fetch();

      return exits.success({ message: "Order Created Successfully", order });
    } catch (error) {
      console.log(error);
      return exits.error({ message: "Something Went Wrong!" });
    }
  },
};
