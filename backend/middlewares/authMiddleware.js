const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    // const token = req.headers.authorization.replace("Bearer ", "");
    const token = req.cookies.jwtToken; // Read the token from the cookie
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userData = decoded;
    next();
  } catch (err) {
    if (err.name === 'TokenExpiredError') {
      return res.status(401).json({
        message: 'Authentication failed - Token expired',
      });
    } else if (err.name === 'JsonWebTokenError') {
      return res.status(401).json({
        message: 'Authentication failed - Invalid token',
      });
    } else {
      return res.status(401).json({
        message: 'Authentication failed - Unknown reason',
      });
    }
  }
};