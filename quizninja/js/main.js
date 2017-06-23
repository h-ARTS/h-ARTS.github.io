"use strict";

var view = (function () {

    function update(element, content, klass) {
        var p = element.firstChild || document.createElement("p");
        p.textContent = content;
        element.appendChild(p);
        if (klass) {
            p.className = klass;
        }
    }

    function hide(e) {
        e.style.display = "none";
    }

    function show(e) {
        e.style.display = "block";
    }

    return {
        question: document.getElementById('question'),
        score: document.getElementById('score'),
        feedback: document.getElementById('feedback'),
        start: document.getElementById('start'),
        form: document.getElementById('answer'),
        timer: document.getElementById('timer'),
        hiScore: document.getElementById('hiScore'),
        update: update,
        hide: hide,
        show: show
    }

}());

function getQuiz() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status == 200) {
            var quiz = JSON.parse(xhr.responseText);
            new Game(quiz);
        }
    };
    xhr.open("GET", "https://s3.amazonaws.com/sitepoint-book-content/jsninja/quiz.json", true);
    xhr.overrideMimeType("application/json");
    xhr.send();
    view.update(view.question, "Waiting for questions...");
}

// welcome the user
alert("Welcome to Quiz Ninja!");

view.hide(view.form);

function random(a, b, callback) {

    if (b === undefined) {
        // if only one argument is supplied, assume the lower limit is 1!
        b = a, a = 1;
    }
    var result = Math.floor((b - a + 1) * Math.random()) + a;

    if (typeof callback === "function") {
        result = callback(result);
    }

    return result;

}

function Game(quiz) {

    this.questions = quiz.questions;
    this.phrase = quiz.question;
    this.score = 0; // initialize score
    view.update(view.score, this.score);
    // initialize timer and set up an interval that counts down
    this.time = 20;
    view.update(view.timer, this.time);
    this.interval = window.setInterval(this.countDown.bind(this), 1000);
    // hide button and show form
    view.hide(view.start);
    view.show(view.form);
    // main game loop


    view.form.addEventListener('click', function (e) {

        this.check(e.target.value);

    }.bind(this), false);

    this.chooseQuestion();

}

Game.prototype.chooseQuestion = function () {

    console.log("chooseQuestion() called");

    var questions = this.questions.filter(function (question) {
        return question.asked === false;
    });
    // set the current question
    this.question = questions[random(questions.length) - 1];

    this.ask(this.question);

}

Game.prototype.ask = function (question) {
    console.log("ask() invoked");
    var quiz = this;
    // set the question.asked property to true so it's not asked again
    question.asked = true;
    view.update(view.question, this.phrase + question.question + "?");
    // clear the previous options
    view.form.innerHTML = "";
    // create an array to put the different options in and a button variable
    var options = [],
        button;
    var option1 = chooseOption();
    options.push(option1.answer);
    var option2 = chooseOption()
    options.push(option2.answer);

    // add the actual answer at a random place in the options array
    options.splice(random(0, 2), 0, this.question.answer);

    // loop through each option and display it as a button
    options.forEach(function (name) {

        button = document.createElement("button");
        button.value = name;
        button.textContent = name;
        view.form.appendChild(button);

    });

    // choose an option from all the possible answers but without choosing the same option twice
    function chooseOption() {
        var option = quiz.questions[random(quiz.questions.length) - 1];

        // check to see if the option chosen is the current question or already 
        // one of the options, if it is then recursivley call this function 
        // until it isn't.
        if (option === question || options.indexOf(option.answer) !== -1) {
            return chooseOption();
        }
        return option;
    }

}


Game.prototype.check = function (answer) {
    console.log("check() invoked");

    if (answer === this.question.answer) {
        view.update(view.feedback, 'Correct!', 'right');
        this.score++
            view.update(view.score, this.score);
    } else {
        view.update(view.feedback, "Wrong!", 'wrong');
    }
    this.chooseQuestion();
}

Game.prototype.countDown = function () {
    // decrease time by 1
    this.time--;
    // update the time displayed
    view.update(view.timer, this.time);
    // the game is over if the timer has reached 0
    if (this.time <= 0) {
        this.gameOver();
    }
}

Game.prototype.hiScore = function () {

    if (window.localStorage) {
        // the value held in localStorage is initally null so make it 0
        var hi = localStorage.getItem("hiScore") || 0;

        // check if the hi-score has been beaten and display a message if it has
        if (this.score > hi || hi === 0) {
            localStorage.setItem("hiScore", this.score);
        }
        view.update(view.hiScore, "Hi-Score: " + localStorage.getItem("hiScore"));
        return localStorage.getItem("hiScore");
    }

}

Game.prototype.gameOver = function () {
    console.log("gameOver() invoked");

    // inform the player that the game has finished and tell them how many points they have scored
    view.update(view.question, 'Game Over, you scored ' + this.score + ' points');
    view.hide(view.form);
    view.show(view.start);
    this.hiScore();
    // stop thge countDown interval
    window.clearInterval(this.interval);
}

// Event Listeners
view.start.addEventListener('click', getQuiz, false);