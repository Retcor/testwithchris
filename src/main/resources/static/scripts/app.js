var app = angular.module("testwithchris", ["ngRoute"]);
app.config(function($routeProvider){
    $routeProvider
        .when("/", {
            templateUrl: "../views/testwithchris.html",
            controller: "TestWithChrisController"
        })
        .otherwise({redirectTo: "/"});
});