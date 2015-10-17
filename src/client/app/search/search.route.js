(function() {
    'use strict';

    angular
        .module('app.search')
        .run(appRun);

    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'search',
                config: {
                    url: '/search/:word',
                    templateUrl: 'app/search/search.html',
                    controller: 'SearchController',
                    controllerAs: 'vm',
                    title: 'Search',
                    resolve: {
                        products: getProducts,
                    }
                }
            },
        ];
    }

    /* @ngInject */
    function getProducts($stateParams, $http) {
        return $http
            .get('/api/products/' + $stateParams.word)
            .then(function (res) {
                return res.data;
            })
            .catch(function (error) {
                return [];
            });
    }
})();
