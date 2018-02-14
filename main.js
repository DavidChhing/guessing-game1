var userName = prompt("What is your name?:")
alert("welcome to my site " + userName);
document.getElementById("userName").innerHTML = userName;
console.log("Visitors name:" + userName);
var wantToPlay = confirm("welcome to my site " + userName + "\n\n Do you want to play my guessing game?")
console.log("Wanted to play?" + wantToPlay);
if (wantToPlay) {
    alert("Let's get started then!");
    var counter = 0;

    function favoriteFoodQuestion() {
        var favoriteFood = confirm("My favorite food is sushi??");
        console.log("Favorite food is sushi" + favoriteFood);
        var answer;

        if (favoriteFood) {
            answer = "<span class='correctBox'>Yes I love Sushi <img src='pictures/greenmark.jpeg' width='25' height='25'></span>";
            counter++;
        } else {
            answer = "<span class='incorrectBox'>Nope that's wrong, I love sushi <img src='pictures/redmark.png' width='25' height='25'></span>";
        }
        document.getElementById("sushi").innerHTML = answer;
    }
    favoriteFoodQuestion();

    function bornOregon() {
        var bornOregon = confirm("Was I born and raised in Oregon?");
        console.log("Born in oregon" + bornOregon)

        if (bornOregon) {
            answer = "<span class='correctBox'>Yes I was born here <img src='pictures/greenmark.jpeg' width='25' height='25'>";
            counter++;
        } else {
            answer = "<span class= 'incorrectBox'>Wrong, I was born in Oregon <img src='pictures/redmark.png' width='25' height='25'>";
        }
        document.getElementById("born").innerHTML = answer;
    }
    bornOregon();

    function dogQuestion() {
        var likeDogs = confirm("Do I like dogs?");
        console.log("Do I like dogs" + likeDogs);

        if (likeDogs) {
            answer = "<span class='correctBox'>Yes I love dogs <img src='pictures/greenmark.jpeg' width='25' height='25'>";
            counter++;
        } else {
            answer = "<span class= 'incorrectBox'>That is incorrect, dogs are my favorite <img src='pictures/redmark.png' width='25' height='25'>";
        }
        document.getElementById("dogs").innerHTML = answer;
    }
    dogQuestion();

    function ageQuestion() {
        var myAge = prompt("Guess how old I am?");
        myAge = Number(myAge);
        console.log("My age" + myAge);
        var age = 27;

        if (age === myAge) {
            answer = "<span class='correctBox'>Yes you guessed " + myAge + " that is correct <img src='pictures/greenmark.jpeg' width='25' height='25'>";
            counter++;
        } else if (age > myAge) {
            answer = "<span class= 'incorrectBox'>Nope " + myAge + "<span class= 'incorrectBox'> is too low <img src='pictures/redmark.png' width='25' height='25'>";
        } else if (age < myAge) {
            answer = "<span class= 'incorrectBox'>Close, but your guess " + myAge + " is too high"
        } else {
            "I'm not sure what you typed in.";
        }
        document.getElementById("my-age").innerHTML = answer;
    }
    ageQuestion();

    function phoQuestion() {
        var pho = confirm("Does my family own a chain of PHO restaurants?");
        console.log("Does my family own a chain of PHO restaurants?" + pho);

        if (pho) {
            answer = "<span class= 'incorrectBox'>No my family doesn't own any Pho restaurants, but that would be awesome if they did <img src='pictures/redmark.png' width='25' height='25'>";
        } else {
            answer = "<span class='correctBox'>Yes you caught me, I wish my family owned a pho restaurant <img src='pictures/greenmark.jpeg' width='25' height='25'>";
            counter++;
        }
        document.getElementById("pho-restaurant").innerHTML = answer;
    }
    phoQuestion();

    function favoriteMovieGenre() {
        var movieGuess = prompt("What is my favorite movie genre? \n\n Horror, Action, Comedy, Romance, Sci-fi, Indies");
        console.log("What is my favorite movie genre?" + movieGuess)
        var genre = ['Horror', 'Action', 'Comedy', 'Romance', 'Sci-fi', 'Indies'];
        var correctMovieGenres = ["Horror", "Action", "Comedy"];
        console.log("my movie genre: " + correctMovieGenres)

        for (var i = 0; i < correctMovieGenres.length; i++) {
            console.log(movieGuess === correctMovieGenres[i])
            if (movieGuess.toUpperCase() === correctMovieGenres[i].toUpperCase()) {
                console.log(correctMovieGenres[i])
                answer = "<span class='correctBox'>Yes I do like that genre <img src='pictures/greenmark.jpeg' width='25' height='25'>";
                counter++;
                break;
            } else {
                answer = "<span class= 'incorrectBox'>No, I don't like that genre <img src='pictures/redmark.png' width='25' height='25'>";
            }
        }
        document.getElementById("movies").innerHTML = answer;
    }
    favoriteMovieGenre();

    alert("You got " + counter + " correct");
} else {
    alert("Awww, sorry to hear that, come back another time");
}

    // var userGuess = prompt("Do I like dogs or cats better?");
    // console.log("Dogs or cats better: " + userGuess);
    // if ("dogs" === userGuess.toLowerCase() || "dog" === userGuess.toLowerCase()) {
    //     // alert("Yes that is right, I prefer dogs");
    //     counter++;
    // } else if ("cats" === userGuess.toLowerCase() || "cat" === userGuess.toLowerCase()) {
    //     // alert("No, I do not like cats unless we're talking about Lions");
    // } else {
    //     // alert("I'm not sure what you typed in. Try again");
