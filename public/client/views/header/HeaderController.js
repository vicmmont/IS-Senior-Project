"use strict";

(function() {
    angular
        .module("ISSeniorProject")
        .controller("HeaderController", headerController);

    function headerController($location) {
    	var vm = this;

    	vm.onLabelClick = function() {
    		console.log("We're going home");
    	}
    }
})();