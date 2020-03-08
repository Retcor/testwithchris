(function(){
    var app = angular.module("testwithchris");
    var testWithChrisController = function($scope, testWithChrisService, $location) {
        var success = function(response) {
            $scope.blahblah = response.data.testText;
        };

        var error = function(errorMessage) {
            console.log(errorMessage);
        };

        testWithChrisService.getTestText().then(success, error);

        $scope.updateBlahBlah = function() {
            $scope.blahblah += " more blah blah";
        };
    };
    app.controller('TestWithChrisController', testWithChrisController);
}());