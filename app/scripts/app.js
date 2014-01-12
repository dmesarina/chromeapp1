/*global define*/

define(['angular', 'angular-route', './controllers/index'], function (ng) {
    'use strict';
    
    return ng.module('app', ['ngRoute', 'app.controllers']);
});
