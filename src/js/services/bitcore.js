'use strict';
angular.module('copayApp.services')
  .factory('bitcoreLtz', function bitcoreLtzFactory(bwcService) {
    var bitcoreLtz = bwcService.getBitcoreLtz();
    return bitcoreLtz;
  });
