var app = angular.module("CornerStoneApp", ['angucomplete']); // module init
app.controller("MainController", function($scope, $http) { // controller init

    $scope.autocomplete = [];
    $scope.testimonies = [];
    $scope.imageData = [];
    $scope.imageRow2 = [];
    $scope.searching = false;

    $http.get("/data/autocomplete.json").then(function(response) {
        $scope.autocomplete = response.data;
    });

    $http.get("/data/testimonies.json").then(function(response) {
        $scope.testimonies = response.data;
    });

    // instagram images
    $http.get("//www.instagram.com/JoinCornerstone/media/").then(function(response) {

        var half_length = Math.ceil(response.data.items.length / 2);

        $scope.imageData = response.data.items.splice(0, half_length);
        $scope.imageRow2 = response.data.items;


        console.log($scope.imageRow2);
    }, function(response) {
        //Second function handles error
        console.log('CORS Network Error Occurred');
    });

    $scope.searchBar = function() {
        $scope.searching = !$scope.searching;
    };

});