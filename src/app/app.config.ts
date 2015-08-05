module Cardable {
  'use strict';

  export class Config {
    /** @ngInject */
    constructor($logProvider: ng.ILogProvider, toastrConfig: ToastrOptions) {
      // enable log
      $logProvider.debugEnabled(true);
      // set options third-party lib
      toastrConfig.timeOut = 3000;
      toastrConfig.positionClass = 'toast-top-right';
      toastrConfig.preventDuplicates = true;
      toastrConfig.progressBar = true;
    }

  }
}
