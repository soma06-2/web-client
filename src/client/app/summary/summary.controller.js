(function() {
    'use strict';

    angular
        .module('app.summary')
        .controller('SummaryController', SummaryController);

    /* @ngInject */
    function SummaryController($element, summary) {
        var vm = this;

        vm.summary = summary;

        console.log(summary);

        var graph = d3
            .select('.graph')
            .append('svg:svg')
            .attr('width', 900)
            .attr('height', 450);

        var yAxis = d3.scale.linear().domain([0, 1]).range([0, 400]);

        graph
            .append('svg:rect')
            .attr('x', 100)
            .attr('y', yAxis)
            .attr('height', 100)
            .attr('width', 20);

    }
})();
