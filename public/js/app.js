var movieApp = angular.module("movieApp", ["ngRoute"]);
movieApp.config(function ($routeProvider) {
                
  $routeProvider
        .when("/home", {
            templateUrl: "../Templates/home.html"
        })
        .when("/about", {
            templateUrl: "../Templates/about.html"
        })
})
