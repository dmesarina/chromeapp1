/*jslint browser: true, devel: true*/
/*global define*/

define(['require', 'angular', 'jquery', 'foundation', 'app', 'routes'], function (require, ng, $) {
    'use strict';
    
    require(['domReady!'], function (document) {
        $(document).foundation();
        ng.bootstrap(document, ['app']);
    });
});
