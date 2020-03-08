(function(){
    var testWithChrisService = function($http) {
        var getTestText = function() {
            return $http.get("../testWithChris");
        };

        return {
            getTestText: getTestText
        };
    };
    var module = angular.module("testwithchris");
    module.factory("testWithChrisService", testWithChrisService);
}());