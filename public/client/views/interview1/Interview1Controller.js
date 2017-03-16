"use strict";

(function() {
    angular
        .module("ISSeniorProject")
        .controller("Interview1Controller", interview1Controller);

    function interview1Controller($location, $routeParams, ParticipantDataService) {
    	var vm = this;
    	vm.group; 

    	function init() {
    		vm.group = $routeParams["group"];
    	}

    	init();

    	vm.next = function() {
    		$location.url("/quiz1?group=" + vm.group);
    	}
    }
})();