angular.module('TennoDex.Menu')
    .controller('MenuController', [
        '$rootScope', 
        MenuController
        ]);

function MenuController($rootScope) {
    var $ctrl = this;
    $ctrl.siteDescrip = " - Current Alerts";
    $ctrl.tester = false;
    $ctrl.navList = [
        {'link':'#',    'title':'Alerts'}
    ];
}