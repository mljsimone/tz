module.exports = function($resource) {
/*
  { 'get':    {method:'GET'},
    'save':   {method:'POST'},
    'query':  {method:'GET', isArray:true},
    'remove': {method:'DELETE'},
    'delete': {method:'DELETE'}
  };
*/
  return $resource(
    "/api/v1/users/:id",
    { id: "@id" },
    {}
  );
}
