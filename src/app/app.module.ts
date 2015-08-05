/// <reference path="references.d.ts" />
module Cardable {
  'use strict';

  angular.module('Cardable', [
    // External components
    'ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ui.router', 'ngMaterial','gettext', 'toastr'
    
    ])
    .config(Cardable.Config)
    .config(Cardable.RouterConfig)
    .run(Cardable.RunBlock)
    .controller(MainController.UID, Cardable.MainController);
}
