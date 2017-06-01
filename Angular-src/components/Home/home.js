angular.module('TennoDex.Home', [
    'ngRoute'
])

    .config(['$routeProvider', function ($routeProvider) {
        // $locationProvider.hashPrefix('#');
        $routeProvider
        .when('/', {
            templateUrl: 'Angular-src/components/Home/templates/home.tmpl.html',
            controller: 'HomeController as $ctrl'
        })
        .otherwise({
            templateUrl: 'Angular-src/views/404.tmpl.html'
            // templateUrl: '/Angular-src/components/Home/templates/home.tmpl.html'
        })
        ;
    }])

    .value('version', '0.1');