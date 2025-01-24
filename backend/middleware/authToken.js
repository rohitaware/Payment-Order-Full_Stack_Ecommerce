const jwt = require("jsonwebtoken");

async function authToken(req, res, next) {
  try {
    // Extract the token from cookies
    const token = req.cookies?.token;

    if (!token) {
      return res.status(401).json({
        message: "Please Login....!",
        error: true,
        success: false,
      });
    }

    // Verify the token
    jwt.verify(token, process.env.TOKEN_SECRET_KEY, function (err, decoded) {
      if (err) {
        console.log("JWT verification error:", err);
        return res.status(401).json({
          message: "Invalid or expired token",
          error: true,
          success: false,
        });
      }

      // Attach user ID to the request
      req.userId = decoded?._id; // Assuming the token payload contains `_id`
      console.log("Decoded JWT:", decoded);

      next(); // Proceed to the next middleware or route handler
    });
  } catch (err) {
    res.status(500).json({
      message: err.message || "Internal server error",
      error: true,
      success: false,
    });
  }
}

module.exports = authToken;
