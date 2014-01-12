/*jslint devel: true*/
/*global define, chrome*/

define(['./module', 'keys'], function (controllers, keys) {
    'use strict';
    
    var github = keys.github, authOpts = {
        'url': 'https://github.com/login/oauth/authorize?client_id=' + github.id +
              '&reponse_type=token' +
              '&access_type=online' +
              '&redirect_uri=' + encodeURIComponent(github.redirectUri),
        'interactive': true
    };
    
    controllers.controller('SimpleController', ['$scope', function ($scope) {
        $scope.accessfs = function () {
            chrome.fileSystem.chooseEntry({type: 'openFile'}, function (entry) {
                console.log('completed', chrome.runtime.lastError, entry);
            });
        };
        
        $scope.github = function () {
            chrome.identity.launchWebAuthFlow(authOpts, function (response) {
                console.log('completed', chrome.runtime.lastError, response);
            });
        };
    }]);
});
