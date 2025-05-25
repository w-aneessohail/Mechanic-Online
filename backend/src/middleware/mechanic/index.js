import jwt from "jsonwebtoken";

const mech_AuthMiddleware = (req, res, next) => {
  const header = req.headers;
  if (!header.authorization) {
    return res.status(401).json({
      message: "Authorization header missing",
    });
  }
  let token = header.authorization.split(" ")[1];

  try {
    const decode = jwt.verify(token, "secret");

    const currentTimestamp = Math.floor(Date.now() / 1000);
    if (decode.exp && currentTimestamp > decode.exp) {
      return res.status(401).json({
        message: "Token has expired - please login again",
      });
    }

    req.user = decode;
    next();
  } catch (error) {
    return res.status(401).json({
      message: "Invalid token - please login again",
    });
  }
};

export default mech_AuthMiddleware;
