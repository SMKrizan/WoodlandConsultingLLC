const jwt = require('jsonwebtoken');

const secret = 'nosecretsallowed';
const expiration = '2h';

module.exports = {
  authMiddleware: function ({ req }) {
    // allows token to be sent via req.body, req.query, or headers
    let token = req.body.token || req.query.token || req.headers.authorization;

    // ["Bearer", "<tokenvalue>"]
    if (req.headers.authorization) {
      token = token
        .split(' ')
        .pop()
        .trim();
    }

    // console.log("token", token)

    if (!token) {
      return req;
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.owner = data;
    }
    catch {
      console.log('Invalid token');
    }

    return req;
  },
  signToken: function ({ _id, ownerName, ownerEmail }) {
    const payload = { _id, ownerName, ownerEmail };

    return jwt.sign(
      { data: payload },
      secret,
      { expiresIn: expiration }
    );
  }
};