(function() {
    'use strict';

    angular
        .module('app.summary')
        .controller('SummaryController', SummaryController);

    /* @ngInject */
    function SummaryController($element, summary) {
        var vm = this;

        vm.summary = summary;
    }
})();
