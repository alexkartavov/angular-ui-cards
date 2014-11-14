(function() {
    'use strict';

    angular.module('ui.cards')
        .directive('uiCards', [ '$compile', 'cardsConfig', 'keys', '$window',
            function($compile, cardsConfig, keys, $window) {
                return {
                    restrict: 'E',
                    scope: {
                        id: '@',
                        datasource: '='
                    },
                    link: function(scope, element, attrs) {
                        // Create template before the rest of the link logic
                        var cardsId = scope.id + "_container";
                        var template = '<div id="' + cardsId + '" class="nano ' + cardsConfig.cardsClass + '">' +
                                '<ul class="nano-content ' + cardsConfig.cardDeckClass + '">' +
                                    '<li ng-repeat="item in datasource">';
                        
                        template += '<div class="' + cardsConfig.collapsedCardClass + '">';
                        if (scope.$parent.cardFields) {
                            var fields = scope.$parent.cardFields;
                            for(var i = 0; i < fields.length; i++) {
                                template += '{{ item.' + fields[i].datasourceField +' }} ';
                            }
                        }
                        template += '</div>';
                        
                        template += '<div class="' + cardsConfig.expandedCardClass + ' hidden">';
                        template += scope.$parent.expandedTemplate;
                        template += '</div>';
                        
                        template += '</li>' +
                                '</ul>' +
                              '</div>';
                        // -- end creating template
                        
                        element.html(template).show();

                        $compile(element.contents())(scope);
                        
                        var config = {};
                        angular.extend(config, cardsConfig);
                        scope.$mainElem = angular.element(element.children()[0]);
                        if (config.cardsClass) {
                            scope.$mainElem.addClass(config.cardsClass);
                        }

                        scope.$contentElem = angular.element(scope.$mainElem.children()[0]);
                        
                        var expandedItem = -1;
                        var expandItem = function(index) {
                            if(expandedItem >= 0) {
                                collapseItem(expandedItem);
                            }
                            var deck = $("#" + cardsId + " .nano-content");
                            var item = deck.children()[index];
                            $(item).find("." + cardsConfig.collapsedCardClass).addClass("hidden");
                            $(item).find("." + cardsConfig.expandedCardClass).removeClass("hidden");
                            expandedItem = index;
                        };
                        var collapseItem = function(index) {
                            var deck = $("#" + cardsId + " .nano-content");
                            var item = deck.children()[index];
                            $(item).find("." + cardsConfig.expandedCardClass).addClass("hidden");
                            $(item).find("." + cardsConfig.collapsedCardClass).removeClass("hidden");
                            expandedItem = -1;
                        };
                        
                        setTimeout(function() { //since there is no post render event, simply defer this call in time
                            $("#" + cardsId + ".nano").nanoScroller();
                            expandItem(0);
                            $("#" + cardsId + ".nano").on("update", function(event, values){ 
                                //values.position - current pos
                                //values.maximum - max pos
                                //values.direction - "up" or "down"
                                var deck = $("#" + cardsId + " .nano-content");
                                var length = deck.children().length;
                                var currentItem = Math.floor(values.position / Math.round(values.maximum / length));
                                expandItem(currentItem);
                            });
                        });

                    }
                };
            }
        ]);
})();