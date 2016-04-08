var app = angular.module("myApp", []);

app.controller("N64Controller", function($scope, $http) {

$scope.republicans = [];
$scope.democrats = [];
var buttonClicked = false;

  $http.get('/democrat').then(function(response) {
    $scope.democrats = response.data;
  });

  $http.get('/republican').then(function(response) {
    console.log(response);
    $scope.republicans = response.data;
  });

  $http.get('/deciscion').then(function(response) {
    $scope.foundWinner = response.data;
  });

  $scope.callWinner = function() {
    if(!buttonClicked) {
    buttonClicked = true;
    $scope.winner = $scope.foundWinner;
  } else {
    return alert("No re-dos. You're stuck with them. Have a good four years!");
  }
 };

}); // n64
