(function() {
    'use strict';

    angular.module('ui.cards')
        .directive('uiCardTemplate',['$compile',
            function($compile) {
                return {
                    restrict: 'E',
                    scope: {
                    },
                    link: function(scope, element, attrs) {
                        scope.$parent.expandedTemplate = element.html();
                    }
                };
            }
    ]);
})();