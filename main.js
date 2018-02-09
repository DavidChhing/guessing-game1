var username = prompt("What is your name?:")
alert("welcome to my site " + username);
console.log("Visitors name:" + username);
var wantToPlay = confirm("welcome to my site " + username + "\n\n Do you want to play my guessing game?")
console.log("Wanted to play?" + wantToPlay);
if (wantToPlay) {
    alert("Let's get started then!");
    var counter = 0;
    
    var favoriteFood = confirm("My favorite food is sushi??");
    console.log("Favorite food is sushi" + favoriteFood);

    if (favoriteFood) {
        document.getElementById("sushi").innerHTML =  "Yes I love Sushi";   
        counter++;
    } else {
        document.getElementById("sushi").innerHTML = "Nope that's wrong, I love sushi";
    }
    
    var bornOregon = confirm("Was I born and raised in Oregon?");
    console.log("Born in oregon" + bornOregon)

    if (bornOregon) {
        document.getElementById("born").innerHTML = "Yes I was born here";
        counter++;
    } else {
        document.getElementById("born").innerHTML = "Wrong, I was born in Oregon";
    }
    
    var likeDogs = confirm("Do I like dogs?");
    console.log("Do I like dogs" + likeDogs);

    if (likeDogs) {
        document.getElementById("dogs").innerHTML = "Yes I love dogs";
        counter++;
    } else {
        document.getElementById("dogs").innerHTML = "That is incorrect, dogs are my favorite";
    }

    var myAge = prompt("Guess how old I am?");
    myAge = Number(myAge);
    console.log("My age" + myAge);
    var age = 27;

    if (age === myAge) {
        document.getElementById("my-age").innerHTML = "Yes you guessed " + myAge + " that is correct";
        counter++;
    } else if (age > myAge) {
         document.getElementById("my-age").innerHTML ="Nope " + myAge + "is too low";
    } else if (age < myAge) {
         document.getElementById("my-age").innerHTML = "Close, but your guess " + myAge + " is too high"
    } else {
         document.getElementById("my-age").innerHTML = "I'm not sure what you typed in.";
    }

    var pho = confirm("Does my family own a chain of PHO restaurants?");
    console.log("Does my family own a chain of PHO restaurants?" + pho);
    
    if (pho) {
        document.getElementById("pho-restaurant").innerHTML = "No my family doesn't own any Pho restaurants, but that would be awesome if they did";
    } else {
        document.getElementById("pho-restaurant").innerHTML = "Yes you caught me, I wish my family owned a pho restaurant";
        counter++;
    }
    
    var movies = prompt("What is my favorite movie genre? \n\n Horror, Action, Comedy, Romance, Sci-fi, Indies");
    console.log("What is my favorite movie genre?" + movies)
    var genre = ["Horror", "Action", "Comedy", "Romance", "Sci-fi", "Indies"];
    var myMovieGenre = "horror";

    if (myMovieGenre === movies){
        document.getElementById("movies").innerHTML = "Yes horror is my favorite, nice guess";
        counter++;
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
    
    

    alert("You got " + counter + " correct");

    } else {
    alert("Awww, sorry to hear that, come back another time");

}