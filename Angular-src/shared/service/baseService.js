angular.module('TennoDex.ResourceManager')
    .service('baseService', function ($http) {
        var $baseResource = this;
        var URL = 'http://tennodex.com';
		var Key = '';

        $baseResource.getURL = function() {

            console.log("global? " + URL);
            return URL; 
        }

        $baseResource.getIPAddress = function ($ctrl) {
            
            return $http({method:"GET", url:URL + "/api/IP"})
                .then(function(result)
                {
                    return result.data; //Local
                    // return 'DENY'; 
                    // return '127.0.0.1'; 
                });
        };

        $baseResource.apiKey = function () {
            return Key;
        };

        

        console.log("Base resource manager created created");
    });