 App.controller('ParamController', function($scope, variablesPartagees) {
    $scope.tailleIncrement = variablesPartagees.values.tailleIncrement;
    $scope.limiteMin = variablesPartagees.values.limiteMin;
    $scope.limiteMax = variablesPartagees.values.limiteMax;
    $scope.nombre = variablesPartagees.values.nombre;

    $scope.enregistrer= function(){
        variablesPartagees.values.tailleIncrement = $scope.tailleIncrement;
        variablesPartagees.values.limiteMin = $scope.limiteMin;
        variablesPartagees.values.limiteMax = $scope.limiteMax;
        variablesPartagees.values.nombre = $scope.nombre;
        alert("Valeurs sauvegardées.");
    };
});