"use strict";

(function() {
    angular
        .module("ISSeniorProject")
        .controller("Quiz2Controller", quiz2Controller);

    function quiz2Controller($location, $routeParams, ParticipantDataService) {
    	var vm = this;
        vm.group;

    	vm.question1;
    	vm.question2;
    	vm.question3;
    	vm.question4;
    	vm.question5;
    	vm.question6;
    	vm.question7;
    	vm.question8;
    	vm.question9;
    	vm.question10;
    	vm.question11;
    	vm.question12;
    	vm.question13;
    	vm.question14;
    	vm.question15;

    	vm.next = function() {
            vm.group = $routeParams["group"];

    		var quizAnswers = {};
    		quizAnswers["Question1"] = vm.question1;
    		quizAnswers["Question2"] = vm.question2;
    		quizAnswers["Question3"] = vm.question3;
    		quizAnswers["Question4"] = vm.question4;
    		quizAnswers["Question5"] = vm.question5;
    		quizAnswers["Question6"] = vm.question6;
    		quizAnswers["Question7"] = vm.question7;
    		quizAnswers["Question8"] = vm.question8;
    		quizAnswers["Question9"] = vm.question9;
    		quizAnswers["Question10"] = vm.question10;
    		quizAnswers["Question11"] = vm.question11;
    		quizAnswers["Question12"] = vm.question12;
    		quizAnswers["Question13"] = vm.question13;
    		quizAnswers["Question14"] = vm.question14;
    		quizAnswers["Question15"] = vm.question15;

    		ParticipantDataService
    			.setQuiz2Answers(quizAnswers);

    		$location.url("/survey?interview=2" + "&group=" + vm.group);
    	}

    }
})();