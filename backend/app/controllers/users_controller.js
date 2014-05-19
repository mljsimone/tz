var User = require("../models").User;

module.exports = {
  create: create,
  destroy: destroy,
  findAll: findAll,
  findOne: findOne,
  update: update
};

function create(request, response) {
  User.
    create(request.body).
    success(function() {
      setTimeout(function() {
        response.send(201);
      }, 3000);
    }).
    error(function(error) {
      response.send(500, { error: error });
    });
}

function destroy(request, response) {
}

function findAll(request, response) {
  User.
    findAll().
    success(function(users) {
      response.json(users);
    }).
    error(function(error) {
      response.json(500, { error: error });
    });
}

function findOne(request, response) {
  var id = request.params.id;
  
  User.
    find(id).
    success(function(user) {
      response.json(user);
    }).
    error(function(error) {
      response.json(500, { error: error });
    });
}

function update(request, response) {
}
