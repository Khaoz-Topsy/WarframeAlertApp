angular.module('TennoDex.ResourceManager')
    .service('warframeAlertService', function ($http, baseService) {
        var $warframeAlertResource = this;

        $warframeAlertResource.getAllAlertsAndNonAlerts = function ($ctrl) {

            $ctrl.alertLoading = true;

            var filter = {
                APIKey : baseService.apiKey()
            };  

            $http
                .get(baseService.getURL() + '/api/Warframe/Current', {
                    params: filter
                })
                .then(function (response) {
                    $ctrl.AlertsAndNonAlerts = response.data;
                    $ctrl.alertLoading = false;
                })
                .catch(function (data, status) {
                    $ctrl.AlertsAndNonAlerts = [];
                    $ctrl.alertLoading = false;
					$ctrl.loadingFailed = true;
                    console.log("Warframe Alert resource manager error on Connection");
                });
        };

        $warframeAlertResource.getAllAlerts = function ($ctrl) {

            $ctrl.alertLoading = true;

            var filter = {
                APIKey : baseService.apiKey()
            };  

            $http
                .get(baseService.getURL() + '/api/Warframe/Current/Alerts', {
                    params: filter
                })
                .then(function (response) {
                    $ctrl.Alerts = response.data;
                    $ctrl.alertLoading = false;
                })
                .catch(function (data, status) {
                    $ctrl.Alerts = [];
                    $ctrl.alertLoading = false;
                    console.log("Warframe Alert resource manager error on Connection");
                });
        };

        $warframeAlertResource.getAllNonAlerts = function ($ctrl) {

            $ctrl.nonAlertLoading = true;

            var filter = {
                APIKey : baseService.apiKey()
            };  

            $http
                .get(baseService.getURL() + '/api/Warframe/Current/NonAlerts', {
                    params: filter
                })
                .then(function (response) {
                    $ctrl.NonAlerts = response.data;
                    $ctrl.nonAlertLoading = false;
                })
                .catch(function (data, status) {
                    $ctrl.NonAlerts = [];
                    $ctrl.nonAlertLoading = false;
                    console.log("Warframe NonAlert resource manager error on Connection");
                });
        };        

        console.log("Warframe Alert resource manager created created");
    });