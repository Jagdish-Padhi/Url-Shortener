const sessionIdToUserMap = new Map();
const jwt = require("jsonwebtoken");

const secret = "Jag123?";

//it will create tokens
function setUser(user) {
  return jwt.sign(
    {
      _id: user._id,
      email: user.email,
    },
    secret
  );
}

//to verify tokens
function getUser(token) {
  if (!token) return null;

  return jwt.verify(token, secret);
}

module.exports = {
  setUser,
  getUser,
};
