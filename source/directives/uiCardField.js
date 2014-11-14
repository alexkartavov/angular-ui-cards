(function() {
    'use strict';

    angular.module('ui.cards')
        .directive('uiCardField',['$compile',
            function($compile) {
                return {
                    restrict: 'E',
                    scope: {
                        datasourceField: '@',
                        fieldHeader: '@'
                    },
                    link: function(scope, element, attrs) {
                        scope.$parent.cardFields = scope.$parent.cardFields || [];
                        scope.$parent.cardFields.unshift({
                            datasourceField: scope.datasourceField,
                            fieldHeader: scope.fieldHeader
                        });
                    }
                };
            }
    ]);
})();