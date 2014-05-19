var User = require("../models").User;

module.exports = {
  create: create,
  destroy: destroy,
  findAll: findAll,
  findOne: findOne,
  update: update
};

function create(request, response) {
  console.log(req.params);
  console.log(req.body);
  
  response.send(200);
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
  var id = req.params.id;
  
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
