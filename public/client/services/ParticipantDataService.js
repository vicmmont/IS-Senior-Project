"use strict";
(function() {
    angular
        .module("ISSeniorProject")
        .service("ParticipantDataService", participantDataService);

    function participantDataService() {
        var data = {};
        var quiz1Answers = {
            "Questio1" : "Theodore Roosevelt",
            "Question2" : "51",
            "Question3" : "Democrats not showing up to the polls",
            "Question4" : "Population distribution",
            "Question5" : "The minimum wage",
            "Question6" : "People from rural areas",
            "Question7" : "People should engage and speak with people of different viewpoints and backgrounds",
            "Question8" : "The House of Representatives from Illinois",
            "Question9" : "Iowa",
            "Question10" : "The party has lost a significant number of seats nationwide",
            "Question11" : "The Koch Brothers",
            "Question12" : "National and international issues",
            "Question13" : "It was a huge crisis",
            "Question14" : "Giving advice to the party",
            "Question15" : "A vacation"
        };
        var quiz2Answers = {
            "Question1" : "Realists and Idealists",
            "Question2" : "Woodrow Wilson",
            "Question3" : "North Korea",
            "Question4" : "Military solutions",
            "Question5" : "Russia",
            "Question6" : "10",
            "Question7" : "World War II",
            "Question8" : "180000",
            "Question9" : "Resources are freed to be spent in what the President considers to be real problems",
            "Question10" : "Dual Containment",
            "Question11" : "Ending the Iraq War",
            "Question12" : "Through direct diplomacy",
            "Question13" : "The Arab Spring",
            "Question14" : "Syria",
            "Question15" : "Syria"
        };
        var questionProperties = ["Question1", "Question2", "Question3", "Question4", "Question5", "Question6", "Question7", "Question8", "Question9", "Question10", "Question11", "Question12", "Question13", "Question14", "Question15"];
        var surveyQuestionProperties = ["Question1", "Question2", "Question3", "Question4", "Question5", "Question6", "Question7", "Question8"];

        var fields = ["Participant Id", "Group", "Gender", "Age", "Year", "Quiz 1, Question 1", "Quiz 1, Question 2", "Quiz 1, Question 3", "Quiz 1, Question 4", "Quiz 1, Question 5", "Quiz 1, Question 6", "Quiz 1, Question 7", "Quiz 1, Question 8", "Quiz 1, Question 9", "Quiz 1, Question 10", "Quiz 1, Question 11", "Quiz 1, Question 12", "Quiz 1, Question 13", "Quiz 1, Question 14", "Quiz 1, Question 15", "Quiz 1 Score", "Quiz 2, Question 1", "Quiz 2, Question 2", "Quiz 2, Question 3", "Quiz 2, Question 4", "Quiz 2, Question 5", "Quiz 2, Question 6", "Quiz 2, Question 7", "Quiz 2, Question 8", "Quiz 2, Question 9", "Quiz 2, Question 10", "Quiz 2, Question 11", "Quiz 2, Question 12", "Quiz 2, Question 13", "Quiz 2, Question 14", "Quiz 2, Question 15", "Quiz 2 Score", "Text Survey, Question 1", "Text Survey, Question 2", "Text Survey, Question 3", "Text Survey, Question 4", "Text Survey, Question 5", "Text Survey, Question 6", "Text Survey, Question 7", "Text Survey, Question 8", "Text Survey Score", "Video Survey, Question 1", "Video Survey, Question 2", "Video Survey, Question 3", "Video Survey, Question 4", "Video Survey, Question 5", "Video Survey, Question 6", "Video Survey, Question 7", "Video Survey, Question 8", "Video Survey Score"];


        this.setParticipantId = function(participantId) {
            data["participantId"] = participantId;
        }

        this.setGroup = function(group) {
            data["group"] = group;
        }

        this.setQuiz1Answers = function(answers) {
            for (var index = 0; index < questionProperties.length; index++){
                var property = "quiz1" + questionProperties[index];
                data[property] = answers[questionProperties[index]];
            }

            gradeAnswers("Quiz 1", answers);
        }

        this.setQuiz2Answers = function(answers) {
            for (var index = 0; index < questionProperties.length; index++){
                var property = "quiz2" + questionProperties[index];
                data[property] = answers[questionProperties[index]];
            }

            gradeAnswers("Quiz 2", answers);
        }

        this.setSurveyAnswers = function(medium, surveyAnswers) {
            var compositeScore = gradeSurvey(surveyAnswers);
            var propertyPrefix;

            if (medium === 'video') {
                propertyPrefix = "videoSurvey";
                data["videoSurveyScore"] = compositeScore;
            } else {
                propertyPrefix = "textSurvey";
                data["textSurveyScore"] = compositeScore;
            }

            for (var index = 0; index < surveyQuestionProperties.length; index++){
                var property = propertyPrefix + surveyQuestionProperties[index];
                data[property] = surveyAnswers[surveyQuestionProperties[index]];
            }

            return data;
        }

        this.saveDemographics = function(demographicData) {
            for (var property in demographicData) {
                data[property] = demographicData[property];
            }
        }

        this.getData = function() {
            var list = [];
            list.push(data);

            return list;
        }

        function gradeSurvey(submittedAnswers) {
            var questionCount = 0;
            var sum = 0;

            for (var property in submittedAnswers) {
                sum += parseInt(submittedAnswers[property]);
                questionCount++;
            }

            return sum / questionCount;
        }

        function gradeAnswers(quiz, submittedAnswers) {
            var answers = quiz === "Quiz 1" ? quiz1Answers : quiz2Answers;
            var quizScoreProperty = quiz === "Quiz 1" ? "quiz1Score" : "quiz2Score";
            var questionCount = 0;
            var correctCount = 0; 
            var incorrectCount = 0; 

            for (var property in submittedAnswers) {
                questionCount++;
                if (submittedAnswers[property] === answers[property]) {
                    correctCount++;
                } else {
                    incorrectCount++;
                }
            }

            data[quizScoreProperty] = correctCount / questionCount;
        }
    }
})();