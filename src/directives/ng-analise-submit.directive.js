angular.module('app').directive('ngAnaliseSubmit', function() {
    return {
        restrict: 'E',
        require: '^form',
        scope: {
            submit: '&'
        },
        template: '<button type="submit" class="btn btn-primary">Analise de Crédito</button>',
        link: function($scope, $element, $attrs, formCtrl) {
            $element.on('click', function() {
                if(formCtrl.$valid) {
                    $scope.submit();
                } else {
                    alert('Formulário invalido');
                }
            });
        }
    }
});