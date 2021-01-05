const JWT = require("jsonwebtoken");

module.exports = async function (req, res, proceed) {
  try {
    const jwtSecret = sails.config.jwtSecret || process.env.JWT_SECRET;
    //get token from header: Bearer <token>
    const token = req.headers.authorization.split(" ")[1];

    const decoded = JWT.verify(token, jwtSecret);
    ///Get user details
    const user = await User.findOne({ email: decoded.sub });

    if (!user) throw Error("Unauthenticated");
    //put user in req object; so the controller can access current user
    req.user = user;
    return proceed();
  } catch {
    return res.forbidden();
  }
};
