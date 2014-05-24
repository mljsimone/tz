module.exports = function($scope, Timezone) {
  $scope.timezones = [
    {
      id: 1,
      userId: 1,
      name: "foo",
      city: "Kiev",
      delta: 5
    }, {
      id: 2,
      userId: 1,
      name: "bar",
      city: "Buenos Aires",
      delta: 3
    }, {
      id: 3,
      userId: 1,
      name: "faz",
      city: "Sao pablo",
      delta: 4
    }
  ];
}
