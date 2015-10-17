(function() {
    'use strict';

    angular
		.module('app.layout')
        .directive('htTopNav', htTopNav);

    /* @ngInject */
    function htTopNav() {
        var directive = {
            bindToController: true,
            controller: TopNavController,
            controllerAs: 'vm',
            restrict: 'EA',
            scope: {
                'navline': '='
            },
            templateUrl: 'app/layout/ht-top-nav.html'
        };

        /* @ngInject */
        function TopNavController($state) {
            var vm = this;

            vm.search = search;

            function search(keyword) {
                $state.go('search', {
                    word: keyword,
                });
            }
        }

        return directive;
    }
})();