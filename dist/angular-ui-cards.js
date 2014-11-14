/**
 * @license Angular UI Cards v0.0.1
 * (c) 2014. https://github.com/ak4e/angular-ui-cards
 * License: MIT
 */
(function () {
  'use strict';

  angular.module('ui.cards', [])
    .constant('cardsConfig', {
      cardsClass: 'angular-ui-cards',
      cardDeckClass: 'angular-ui-carddeck',
      collapsedCardClass: 'angular-ui-card-collapsed',
      expandedCardClass: 'angular-ui-card-expanded'
    })
    .constant('keys', {
      space: 32,
      enter: 13,
      tab: 9,
      esc: 27,
      escape: 27,
      backspace: 8,
      back: 8,
      shift: 16,
      maj: 16,
      ctrl: 17,
      control: 17,
      alt: 18,
      left: 37,
      leftarrow: 37,
      up: 38,
      uparrow: 38,
      right: 39,
      rightarrow: 39,
      down: 40,
      downarrow: 40,
      ins: 45,
      insert: 45,
      del: 46,
      'delete': 46,
      home: 36,
      end: 35,
      pgup: 33,
      pageup: 33,
      pgdown: 34,
      pagedown: 34,
      f1: 112,
      f2: 113,
      f3: 114,
      f4: 115,
      f5: 116,
      f6: 117,
      f7: 118,
      f8: 119,
      f9: 120,
      f10: 121,
      f11: 122,
      f12: 123
    });
})();
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