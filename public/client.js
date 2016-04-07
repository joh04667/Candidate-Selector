var app = angular.module("myApp", []);

app.controller("N64Controller", function($scope, $http) {

  $http.get('/democrat').then(function(response) {
    console.log(response);
  });

  $http.get('/republican').then(function(response) {
    console.log(response);
  });


}); // n64
