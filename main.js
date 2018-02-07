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
        // alert("Yes I friggin love sushi");
        counter++;
    } else {
        // alert("Nope your wrong");  
    }
    document.getElementById("sushi").innerHTML = favoriteFood;
   
    var bornOregon = confirm("Was I born and raised in Oregon?");
    console.log("Born in oregon" + bornOregon)

    if (bornOregon) {
        // alert("Yes thats right! How did you know?!?!");
        counter++;
    } else {
        // alert("Nope, thats wrong");
    }
    document.getElementById("born").innerHTML = bornOregon
    
    var likeDogs = confirm("Do I like dogs?");
    console.log("Do I like dogs" + likeDogs);

    if (likeDogs) {
        // alert("Yes, I like dogs");
        counter++;
    } else {
        // alert("That is incorrect, who doesn't like dogs");
    }
    document.getElementById("dogs").innerHTML = likeDogs

    var myAge = prompt("Guess how old I am?");
    myAge = Number(myAge);
    console.log("My age" + myAge);
    var age = 27;

    if (age === myAge) {
        document.getElementById("my-age").innerHTML = "Yes you got it, how did you know";
        counter++;
    } else if (age > myAge) {
         document.getElementById("my-age").innerHTML ="Too low";
    } else if (age < myAge) {
         document.getElementById("my-age").innerHTML = "Too high";
    } else {
         document.getElementById("my-age").innerHTML = "I'm not sure what you typed in. Try again";
    }
    // document.getElementById("my-age").innerHTML = myAge

    var backFlip = confirm("Can I do a backflip?");
    console.log("Can I do a backflip?" + backFlip);
    
    if (backFlip) {
     
        Counter++;
    } else {

    }
    document.getElementById("back-flip").innerHTML = backFlip


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