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