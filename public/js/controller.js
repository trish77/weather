var app = angular.module('weatherApp', ['ngAnimate']);

var WeatherController =  function ($scope, $http) {
    var lat, lng;
    var geocode_root ="//maps.googleapis.com/maps/api/geocode/json";
    $scope.getPlace = function(){
        url = geocode_root + '?address=' + $scope.place + "&sensor=false";

        $http.get(url).success(function(data) {
            // console.log(data);
            if (data.status === "OK") {
                $scope.results = data.results;
            }
        });
    };

    $scope.getWeather = function(result){
        // console.log(result);
        if (result.hasOwnProperty("geometry") &&
            result.geometry.hasOwnProperty("location")) {
            
            lat = result.geometry.location.lat;
            lng = result.geometry.location.lng;

            $http.get("//api.forecast.io/forecast/4f8e7b80e1d6519c8789a427297c5db6/" + lat + "," + lng).success(function(data) {
                //method: 'JSONP',
                console.log(data);
                if (data.hasOwnProperty("currently")) {
                    $scope.weather = {
                        location: result.formatted_address,
                        apparentTemperature: data.currently.apparentTemperature,
                        summary: data.currently.summary,
                        temperature: data.currently.temperature
                    };

                    
                }
            });
        }
    };
};
app.controller('WeatherController', WeatherController);


//angular.module("myAnimate", ["ngAnimate"]);
    