var userName = prompt("What is your name?:")
alert("welcome to my site " + userName);
document.getElementById("userName").innerHTML = userName;
console.log("Visitors name:" + userName);
var wantToPlay = confirm("welcome to my site " + userName + "\n\n Do you want to play my guessing game?")
console.log("Wanted to play?" + wantToPlay);
if (wantToPlay) {
    alert("Let's get started then!");
    var counter = 0;

    var favoriteFood = confirm("My favorite food is sushi??");
    console.log("Favorite food is sushi" + favoriteFood);
    var answer;

    if (favoriteFood) {
        answer = "Yes I love Sushi";
        counter++;
    } else {
        answer = "Nope that's wrong, I love sushi";
    }
    document.getElementById("sushi").innerHTML = answer;

    var bornOregon = confirm("Was I born and raised in Oregon?");
    console.log("Born in oregon" + bornOregon)

    if (bornOregon) {
        answer = "Yes I was born here";
        counter++;
    } else {
        answer = "Wrong, I was born in Oregon";
    }
    document.getElementById("born").innerHTML = answer;

    var likeDogs = confirm("Do I like dogs?");
    console.log("Do I like dogs" + likeDogs);

    if (likeDogs) {
        answer = "Yes I love dogs";
        counter++;
    } else {
        answer = "That is incorrect, dogs are my favorite";
    }
    document.getElementById("dogs").innerHTML = answer;

    var myAge = prompt("Guess how old I am?");
    myAge = Number(myAge);
    console.log("My age" + myAge);
    var age = 27;

    if (age === myAge) {
        answer = "Yes you guessed " + myAge + " that is correct";
        counter++;
    } else if (age > myAge) {
        answer = "Nope " + myAge + "is too low";
    } else if (age < myAge) {
        answer = "Close, but your guess " + myAge + " is too high"
    } else {
        "I'm not sure what you typed in.";
    }
    document.getElementById("my-age").innerHTML = answer;

    var pho = confirm("Does my family own a chain of PHO restaurants?");
    console.log("Does my family own a chain of PHO restaurants?" + pho);

    if (pho) {
        answer = "No my family doesn't own any Pho restaurants, but that would be awesome if they did";
    } else {
        answer = "Yes you caught me, I wish my family owned a pho restaurant";
        counter++;
    }
    document.getElementById("pho-restaurant").innerHTML = answer;

    var movieGuess = prompt("What is my favorite movie genre? \n\n Horror, Action, Comedy, Romance, Sci-fi, Indies");
    console.log("What is my favorite movie genre?" + movieGuess)
    var genre = ['Horror', 'Action', 'Comedy', 'Romance', 'Sci-fi', 'Indies'];
    var correctMovieGenres = ["Horror", "Action", "Comedy"];
    console.log("my movie genre: " + correctMovieGenres)

    for (var i = 0; i < correctMovieGenres.length; i++) {
        console.log(movieGuess === correctMovieGenres[i])
        if (movieGuess === correctMovieGenres[i]) {
            console.log(correctMovieGenres[i])
            answer = "Yes I do like that genre";
            counter++;
            break;
        } else {
            answer = "No, I don't like that genre";
        }
     }
     document.getElementById("movies").innerHTML = answer;

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
    