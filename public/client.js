var app = angular.module("myApp", []);

app.controller("N64Controller", function($scope, $http) {

$scope.republicans = [];
$scope.democrats = [];
var buttonClicked = false;

  $http.get('/democrat').then(function(response) {
    console.log(response);
    $scope.democrats = response.data;
  });

  $http.get('/republican').then(function(response) {
    console.log(response);
    $scope.republicans = response.data;
  });

  $scope.findWinner = function() {
    if(!buttonClicked) {
    buttonClicked = true;
    if(Math.floor(Math.random() * 2)) {
      $scope.winner = $scope.democrats[Math.floor(Math.random() * $scope.democrats.length)];
    } else {
      $scope.winner = $scope.republicans[Math.floor(Math.random() * $scope.republicans.length)];
    }
  } else {return alert("No re-dos. You're stuck with them. Have a good four years!")}
};

}); // n64
