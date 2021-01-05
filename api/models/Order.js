/**
 * Order.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: "orders",
  attributes: {
    itemName: {
      // we will stick with a name instead of the reference to the item for this test
      type: "string",
      required: true,
      columnName: "item_name",
    },
    quantity: {
      type: "number",
      required: true,
    },
    status: {
      type: "string",
      isIn: ["drafted", "pending", "shipped", "completed", "failed"],
      defaultsTo: "drafted",
    },
    userId: {
      model: "user",
      columnName: "user_id",
      required: true,
    },
  },
};
