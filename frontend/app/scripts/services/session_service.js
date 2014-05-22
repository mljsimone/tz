module.exports = function($resource) {
  return $resource(
    "/api/v1/sessions/:id",
    { id: "@id" },
    {}
  );
}
