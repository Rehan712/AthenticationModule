var passport = require('passport');
var jwtOptions = require('./jwtOptions');
var { Strategy } = require('passport-jwt');

const users = [
  {
    id: '1',
    username: 'yasser',
    password: '50'
  },
  {
    id: '2',
    username: 'Ali',
    password: '30'
  }
];

module.exports = function() {
  // When a request comes into the API with passport middleware
  // then below is how passport resolves it.
  var strategy = new Strategy(jwtOptions, function(jwt_payload, next) {
    var user = users.filter(user => {
      console.log('payolad is ', jwt_payload, user.id);
      return user.id === jwt_payload.id;
    })[0];
    if (user) {
      next(null, user);
    } else {
      next(null, false);
    }
  });
  passport.use(strategy);
};
