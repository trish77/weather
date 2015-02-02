var app = angular.module("weather", []);

app.controller("SearchController", function($scope){
    var geocoder  = new google.maps.Geocoder();

    this.search = [
        {
            geoQuery: "",
            resultLatLng: "",
            resultCity: ""
        }
    ];

    this.submitQuery = function() {
        geocoder.geocode({'address': this.search.geoQuery}, function(result, status){
            if (status === google.maps.GeocoderStatus.OK) {
                search.resultLatLng = {
                    lat: result[0].geometry.location.lat(),
                    lng: result[0].geometry.location.lng()
                };
            } else {
                alert("Something went wrong: " + status);
                return false;
            }
        });
    };
});