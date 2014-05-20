var User = require("../models").User;

module.exports = {
  create: create,
  destroy: destroy,
  findAll: findAll,
  findOne: findOne,
  update: update
};

function create(request, response) {
  // Validate user's email and password.
  /*
   find user by his email.
   get the salt that was used to hash his password.
   hash the incoming password along the salt.
   compare both hashes.
   */
  
  console.log(request.body);

  if ("lhash" == "rhash") { 
    // if the user or password are wrong, send a 401, "Wrong user or password"
  }
  
  User.
    find(1).
    success(function(user) {
      var tokenData = user.values;
      var secret = 'secret sauce #40';

      var token = jwt.sign(tokenData, secret, { expiresInMinutes: 60 * 5 });
      //response.send({ token: token });
      response.send(201);
    }).
    error(function(error) {
      response.send(500, error);
    });
}

function destroy(request, response) {
  response.send(405);
}

function findAll(request, response) {
  response.send(405);
}

function findOne(request, response) {
  response.send(405);
}

function update(request, response) {
  response.send(405);
}
