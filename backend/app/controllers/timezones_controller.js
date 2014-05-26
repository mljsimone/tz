var Sequelize = require("sequelize");
var Timezone = require("../models").Timezone;

module.exports = {
  create: create,
  destroy: destroy,
  findAll: findAll,
  findOne: findOne,
  update: update
};

function create(request, response) {
  Timezone.create(request.body).success(function() {
    setTimeout(function() {
      response.send(201);
    }, 3000);
  }).error(function(error) {
    response.json(500, { error: error });
  });
}

function destroy(request, response) {

  var where = {
    id: request.params.id
  };
  
  Timezone.destroy(where).success(function() {
    setTimeout(function() {
      response.send(204);
    }, 3000);
  }).error(function(error) {
    response.json(500, { error: error });
  });
}

function findAll(request, response) {
  var offset = request.query.offset || 0;
  var limit = request.query.limit || 0;
  var filter = request.query.filter;
  
  offset = parseInt(offset);
  if (isNaN(offset) || !isFinite(offset))
    return response.json(422, { error: "offset should be an integer." })

  limit = parseInt(limit);
  if (isNaN(limit) || !isFinite(limit))
    return response.json(422, { error: "limit should be an integer." })

  var options = {
    offset: request.query.offset,
    limit: request.query.limit,
  };
  
  if (filter) {
    options.where = Sequelize.or(
      { name: { like: filter } },
      { city: { like: filter } }
    );
  }
  
  Timezone.findAndCountAll(options).success(function(result) {
    response.set("X-Pagination-Offset", offset);
    response.set("X-Pagination-Limit", limit);
    response.set("X-Pagination-Total", result.count);

    setTimeout(function() {
      response.json(result.rows);
      }, 100);

  }).error(function(error) {
    response.json(500, { error: error });
  });
}

function findOne(request, response) {
  var id = request.params.id
  
  Timezone.find(id).success(function(timezone) {
    setTimeout(function() {
      response.json(timezone);
    }, 3000);
  }).error(function(error) {
    response.json(500, { error: error });
  });
}

function update(request, response) {
  var where = {
    id: request.params.id,
    userId: request.user.id
  };
  
  Timezone.update(request.body, where).success(function() {
    setTimeout(function() {
      response.send(201);
    }, 3000);
  }).error(function(error) {
    response.json(500, { error: error });
  });
}
