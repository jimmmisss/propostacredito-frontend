angular.module('app').controller('analiseController', function($scope, $http) {

    $scope.analises = {}

    // Retorna todas as analises
    $http.get("http://localhost:8080/v1").then(function(response) {
        $scope.analises = response.data;
    }, function myError(response) {
        $scope.statuscode = response.status;        
    });

    // Retorna analise por cpf
    $http.get("http://localhost:8080/v1" + cpf).then(function(response) {
        $scope.analises = response.data;
    }, function myError(response) {
        $scope.statuscode = response.status;        
    });    

    $scope.adiciona = function(analise) {

        // Envia dados ao servidor para salvar e realizar análise de crédito
        $http.post('http://localhost:8080/v1', JSON.stringify(analise))
        .success(function (data, status, headers, config) {
            $scope.PostDataResponse = data;
        })

    };


})