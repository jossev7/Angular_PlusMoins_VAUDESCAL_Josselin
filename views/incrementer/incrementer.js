 App.controller('IncrementerController', function($scope, variablesPartagees) {
    $scope.nombre = variablesPartagees.values.nombre;
    $scope.tailleIncrement = variablesPartagees.values.tailleIncrement;
    $scope.limiteMin = variablesPartagees.values.limiteMin;
    $scope.limiteMax = variablesPartagees.values.limiteMax;
    $scope.history=[];




    $scope.checkLimits = function(button){
        if(button == 1)//Si c'est le bouton +
        {
            if($scope.nombre < $scope.limiteMax && $scope.nombre >= $scope.limiteMin)
            {
                return 1;
            }
            else
            {
                return 0;
            }
        }

        if(button == 2)//Si c'est bouton -
        {
            if($scope.nombre <= $scope.limiteMax && $scope.nombre > $scope.limiteMin)
            {
                return 1;
            }
            else
            {
                return 0;
            }
        }
    };

    $scope.incrPlus = function(){
        if($scope.checkLimits(1))
        {
            $scope.nombre = $scope.nombre + $scope.tailleIncrement;
            if($scope.nombre > $scope.limiteMax)
            {
                $scope.nombre = $scope.limiteMax;
            }
            $scope.history.push({timestamp: Date.now(),value: $scope.nombre});
            variablesPartagees.values.nombre = $scope.nombre;
        }
    };


    $scope.incrMoins = function(){
        if($scope.checkLimits(2))
        {
            $scope.nombre = $scope.nombre - $scope.tailleIncrement;
            if($scope.nombre < $scope.limiteMin)
            {
            $scope.nombre = $scope.limiteMin;
            }
            $scope.history.push({timestamp: Date.now(),value: $scope.nombre});
            variablesPartagees.values.nombre = $scope.nombre;
        }
    };

});