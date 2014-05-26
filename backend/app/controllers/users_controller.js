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
      response.json(500, { error: error });
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
}
