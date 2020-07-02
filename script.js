//questions and answers
var qArray = ["What does CSS Stand for?", "Which is the correct order to post to github?", "Which of the following are empty tags?", "What is the spacing inside a tag called?", "Which of the following tags isn't empty?", "How do you comment in CSS?", "What is an absolute position?"];
var q1Ans = ["Creating Style Sheet", "Cascading Style Sheets", "Colours Styling Sheet", "Combined Style Sheets"];
var q2Ans = ["git add git push git commit", "git commit git add git push", "git add git commit git push", "git push git add git commit"];
var q3Ans = ["<head>", "<a>", "<td>", "<br>"];
var q4Ans = ["padding", "spacing", "margin", "border"];
var q5Ans = ["<img>", "<br>", "<a>", "<hr>"];
var q6Ans = ["//", "*/ /*", "''' '''", "<!-- -->"];
var q7Ans = ["in relation to static", "default position: on top", "in relation to nearest ancestor", "in relation to browser window"];
var ans = {
    "0": q1Ans,
    "1": q2Ans,
    "2": q3Ans,
    "3": q4Ans,
    "4": q5Ans,
    "5": q6Ans,
    "6": q7Ans
}

//variable to html
var container = $("#container");
var question = $("<h4>");

//start button
var start = $("<button>");
start.text("Start Quiz");
start.attr("class","btn btn-success start");
container.append(start);

//on click call question function
$(".start").on("click", questions);
$(".answer").on("click", questions);

function questions(){
    empty();
    var counter = 0;
    console.log(counter);
    question.text(qArray[counter]);
    container.append(question);
    //loop to create question n answer field
    for (var k = 0; k < ans[counter].length; k++) {
        var answerButton = $("<button>");
        answerButton.text(ans[counter][k]);
        answerButton.attr("class", "btn btn-warning answer");
        container.append(answerButton);
        container.append($("<br>"));
    }
    counter++;
}

function empty(){
    container.html(" ");
}