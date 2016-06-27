

var App = angular.module('intro-angular', ['ui.router'])

    .config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state('home', {
                url: "/",
                controller: 'HomeController',
                templateUrl:'../views/home/home.html'
            })
            .state('incrementer', {
                url: "/incrementer",
                controller:'IncrementerController',
                templateUrl:'../views/incrementer/incrementer.html'
            })
            .state('param', {
                url: "/param",
                controller:'ParamController',
                templateUrl:'../views/param/param.html'
            })
    })

     .service('variablesPartagees', function() {
        this.values = {
            tailleIncrement: 1,
            limiteMin: -10,
            limiteMax: 10,
            nombre: 0
        };
     });

