var jwt = require("jsonwebtoken"),
    User = require("../models").User;

module.exports = {
  create: create,
  destroy: destroy,
  findAll: findAll,
  findOne: findOne,
  update: update
};

function create(request, response) {
  
  if (typeof request.body.email == "undefined" || typeof request.body.password == "undefined")
    return response.json(422, { error: "email and password are required." });
  
  var email = request.body.email;
  var password = request.body.password;
  
  User.
    find({ where: { email: email }}).
    success(function(user) {

      setTimeout(function () {

      if (!user)
        return response.json(401, { error: "Wrong email or password." });
      
      if (!user.verifyPassword(password))
        return response.send(401, { error: "Wrong email or password." });
      
      var tokenData = user.toJSON();
      delete tokenData.password;

      var token = jwt.sign(tokenData, "secret sauce #40", { expiresInMinutes: 60 * 5 });
      
      response.json({ token: token, user: tokenData });

      }, 1000 * 3); //setTimeout


    }).
    error(function(error) {
      response.json(500, error);
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
