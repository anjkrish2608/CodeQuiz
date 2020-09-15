//questions and answers
var qArray = ["What does CSS Stand for?", "Which is the correct order to post to github?", "Which of the following are empty tags?", "What is the spacing inside a tag called?", "What is an absolute position?"];
var q1Ans = ["Creating Style Sheet", "Cascading Style Sheets", "Colours Styling Sheet", "Combined Style Sheets"];
var q2Ans = ["git add git push git commit", "git commit git add git push", "git add git commit git push", "git push git add git commit"];
var q3Ans = ["<head>", "<a>", "<td>", "<br>"];
var q4Ans = ["padding", "spacing", "margin", "border"];
var q5Ans = ["in relation to static", "default position: on top", "in relation to nearest ancestor", "in relation to browser window"];
var ans = {
    "0": q1Ans,
    "1": q2Ans,
    "2": q3Ans,
    "3": q4Ans,
    "4": q5Ans,
}
var answerSelected;
var score;
var scores=[];
//variable to html
var container = $("#container");
var container2 = $("#container2");
var question = $("<h4>");

//variables for timer
var minutesLeft = 1;
var totalSeconds = 0;
var secondsLeft = 0;
var timerInterval;
var minutesDisplay = $("#minDis");
var secondsDisplay = $("#secDis");
//display initial score and time
$("#score").text("0");
minutesDisplay.text(minutesLeft);
secondsDisplay.text("00")
//start button
var start = $("<button>");
start.text("Start Quiz");
start.attr("class", "btn btn-success start");
container2.append(start);

//start on click call question function
$(".start").on("click", function () {
    startTimer();
    questions();
});


function questions() {
    container2.empty();
    var counter = 0;
    console.log("counter: "+counter);
    question.text(qArray[counter]);
    container2.append(question);
    //loop to create question n answer field
    for (var k = 0; k < ans[counter].length; k++) {
        var answerButton = $("<button>");
        answerButton.text(ans[counter][k]);
        answerButton.attr("class", "btn btn-warning answer");
        container2.append(answerButton);
        container2.append($("<br>"));
    }
    counter++;
    console.log("counter: "+counter);
}

function checkAnswer(answerSelected) {
    if (counter === 0) {
        if (ans[0].answerSelected === "Cascading Style Sheets") {
            score++;
        }
        else {
            secondsLeft - 10;
        }
    }
    else if (counter === 1) {
        if (ans[1].answerSelected === "git add git commit git push") {
            score++;
        }
        else {
            secondsLeft - 10;
        }
    }
    else if (counter === 2) {
        if (ans[2].answerSelected === "<br>") {
            score++;
        }
        else {
            secondsLeft - 10;
        }
    }
    else if (counter === 3) {
        if (ans[3].answerSelected === "spacing") {
            score++;
        }
        else {
            secondsLeft - 10;
        }
    }
    else {
        if (ans[4].answerSelected === "in relation to nearest ancestor") {
            score++;
            saveScore(score);
        }
        else {
            secondsLeft - 10;
            saveScore(score);
        }
    }
    $("#score").text(score);
}

function startTimer() {
    // Write code to start the timer here

    // setTime();
    if (timerInterval === undefined) {
        timerInterval = setInterval(function () {
            if (secondsLeft === 0) {
                if (minutesLeft === 0) {
                    clearInterval(timerInterval);
                    saveScore();
                }
                else {
                    minutesLeft--;
                    secondsLeft = 59;
                }
            }
            secondsLeft--;
            //display minutesleft and seconds left
            secondsDisplay.text(secondsLeft);
            minutesDisplay.text(minutesLeft);
        }, 1000);
    }
}

function showLeaderBoard() {
    container.empty();
    container2.empty();
    question.text("Leaderboard of Anj's Coding Quiz!!");
    var list = $("<ol>");
    var lItem = $("<li>");
    var LBlastScore=localStorage.getItem("lastScore");
    var LBscores=localStorage.getItem("scores");
    for(var i=0;i<LBscores.length;i++){
        var score_i =lItem.text(LBscores[i]);
        list.append(score_i);
    }
    list.append(LBlastScore);
    container2.append(question);
    container2.append(list);
}

function saveScore(lastScore){
    scores.unshift(lastScore);
    localStorage.setItem("lastScore",lastScore);
    localStorage.setItem("scores",scores);
    showLeaderBoard();
}

//answer on click
$(".answer").on("click", function () {
    console.log("answer clicked");
    checkAnswer(this.textContent);
    questions();
});