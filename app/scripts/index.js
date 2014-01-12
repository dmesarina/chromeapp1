/*global require*/

(function () {
    'use strict';
    
    require.config({
        paths: {
            'jquery': '../bower_components/jquery/jquery',
            'foundation': '../bower_components/foundation/js/foundation',
            'domReady': '../bower_components/requirejs-domready/domReady',
            'angular': '../bower_components/angular/angular',
            'angular-route': '../bower_components/angular-route/angular-route'
        },
        shim: {
            'angular': {
                exports: 'angular'
            },
            'angular-route': ['angular'],
            'foundation': ['jquery']
        },
        deps: ['./bootstrap']
    });
}());
