/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
  "GET /api/v1": "home/index",
  "POST /api/v1/register": "auth/register",
  "POST /api/v1/login": "auth/login",
  "POST /api/v1/orders": "orders/create",
  "GET /api/v1/orders": "orders/show",
  "GET /api/v1/orders/:id": "orders/show-single",
  "PATCH /api/v1/orders/:id": "orders/update",
};
