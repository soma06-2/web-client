(function() {
    'use strict';

    angular
        .module('app.search')
        .controller('SearchController', SearchController);

    /* @ngInject */
    function SearchController($stateParams, products) {
        var vm = this;

        vm.word = $stateParams.word;
        vm.products = products;

        console.log(products);
    }
})();
