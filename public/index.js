

(function(){
  var app = angular.module("geoApp", []);
  
  var GeoController = function($scope, $http, $q){
    var onUserComplete = function(response){
      $scope.address = response.data;
  };
  var onError = function(reason){
    $scope.error = "could not find the address";
  };
  $scope.search = function(address){
    $http.get('http://maps.googleapis.com/maps/api/geocode/json', {params: { address: val, sensor: false }});
    var deferred = $q.defer();
    //.then(onUserComplete, onError);
  };
 

  $scope.address = "";  
  $scope.search = "";  
  
  };

  app.controller("GeoController", GeoController);
  
}());



	  // {params: { address: val, sensor: false };