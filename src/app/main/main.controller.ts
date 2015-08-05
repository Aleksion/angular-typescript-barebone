module Cardable {
  'use strict';

  export class MainController {
    static UID: string = 'mainController';
    
    // Scope variables
    test: string = "123";

    /* @ngInject */
    constructor (private $timeout: ng.ITimeoutService, private toastr: Toastr) {
    }

  }
}
