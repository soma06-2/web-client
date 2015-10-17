(function() {
    'use strict';

    angular
        .module('app.summary')
        .run(appRun);

    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [{
            state: 'summary',
            config: {
                url: '/summary/:type/:entityId',
                templateUrl: 'app/summary/summary.html',
                controller: 'SummaryController',
                controllerAs: 'vm',
                title: 'Home',
                resolve: {
                    summary: getSummary,
                }
            }
        }];
    }

    /* @ngInject */
    function getSummary($http, $stateParams) {
        return $http
            .get('http://1.lucent.me:5000/v1/' +
                ($stateParams.type === 'product' ? 'products' : 'posts') +
                '/' + $stateParams.entityId + '/summary')
            .then(function(res) {
                return res.data;
            })
            .catch(function(error) {
                return false;
            });
    }
})();
