
'use strict';
angular.module('copayApp.services')
  .factory('sjcl', function bitcoreLtzFactory(bwcService) {
    var sjcl = bwcService.getSJCL();
    return sjcl;
  });
