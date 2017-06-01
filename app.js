angular.module('TennoDex', [
    'ngRoute',
    'TennoDex.Menu',
    'TennoDex.Home',
    'TennoDex.Alert',
    'TennoDex.RelicCheck',
    //'ng-fusioncharts',
    'TennoDex.ResourceManager',
    //'rzModule'
])

    .config(['$locationProvider', '$httpProvider', function($locationProvider, $httpProvider) {
        //$locationProvider.hashPrefix('');
        //$locationProvider.html5Mode(true);//.hashPrefix('!');
        
        $httpProvider.defaults.headers.post = {};
    }]);
