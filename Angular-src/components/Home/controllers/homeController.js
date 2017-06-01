angular.module('TennoDex.Home')
    .controller('HomeController', [
        '$rootScope', 
        '$window',
        '$location',
        'warframeAlertService',
        HomeController
        ]);

function HomeController($rootScope, $window, $location, warframeAlertService) {
    var $ctrl = this;
    $ctrl.pageName = "Warframe Alerts";
    $ctrl.alertLoading = false;

    //$window.ga('send', 'pageview', {page: $location.url()});

    warframeAlertService.getAllAlertsAndNonAlerts($ctrl);

    $ctrl.convertFaction = function(faction){
        if(faction == 'FC_INFESTATION') {
            return 'Infested';
        }
        else if(faction == 'FC_CORPUS') {
            return 'Corpus';
        }
        else if(faction == 'FC_GRINEER') {
            return 'Grineer';
        }
        else if(faction == 'FC_OROKIN') {
            return 'Orokin';
        }
        else if(faction == 'FC_SENTIENT') {
            return 'Sentient';
        }
        else {
            return 'Sentient';
        }
    };

    $ctrl.getPanelColour = function(author){
        if(author == 'Invasion')
        {
            return 'panel-blue';
        }
            return 'panel-green';
    };

    $ctrl.getFactionImages = function(author){
        if(author == 'Invasion') {
            return true;
        }
            return false;
    };
}