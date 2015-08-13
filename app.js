angular.module('app', [])
.controller('MainCtrl', [
  '$scope',
  function($scope){
    $scope.test = "Hello, world!";
  }
]);
