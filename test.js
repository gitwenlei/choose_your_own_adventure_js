// console.log("hello script js");

// var inputHappened = function(currentInput) {
//     //console.log("Hello World");
//     game(currentInput);
// };

// var year;
// var char;
// var action;

// var game = function(currentInput) {
//       if (currentInput == 2015) {
//         display("I see you're a fan of Back to the Future 2. Would you rather deal with Biff, or Griff? **(B/G)**");
//         document.querySelector('#input').value="";
//         if (currentInput == "b") {
//             display("Hmm, interesting. Biff is angry and has a cane. Do you stand and fight, or run away like a coward? **(S/R)**");
//             document.querySelector('#input').value="";
//             if (currentInput == "s") {
//                 display("Good choice. Biff is old and feeble at this point. You push him over and he falls in a pile of manure.");
//                 document.querySelector('#input').value="";
//                 display("Return to beginning");
//             }
//         }
//     }
// }

///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
// CODECADMEY SAMPLE 1/6

var troll = prompt("You're walking through the forest, minding your own business, and you run into a troll! Do you FIGHT him, PAY him, or RUN?").toUpperCase();

switch(troll) {
  case 'FIGHT':
    var strong = prompt("How courageous! Are you strong (YES or NO)?").toUpperCase();
    var smart = prompt("Are you smart?").toUpperCase();
    if(strong === 'YES' || smart === 'YES') {
      console.log("You only need one of the two! You beat the troll--nice work!");
    } else {
      console.log("You're not strong OR smart? Well, if you were smarter, you probably wouldn't have tried to fight a troll. You lose!");
    }
    break;
  case 'PAY':
    var money = prompt("All right, we'll pay the troll. Do you have any money (YES or NO)?").toUpperCase();
    var dollars = prompt("Is your money in Troll Dollars?").toUpperCase();
    if(money === 'YES' && dollars === 'YES') {
      console.log("Great! You pay the troll and continue on your merry way.");
    } else {
      console.log("Dang! This troll only takes Troll Dollars. You get whomped!");
    }
    break;
  case 'RUN':
    var fast = prompt("Let's book it! Are you fast (YES or NO)?").toUpperCase();
    var headStart = prompt("Did you get a head start?").toUpperCase();
    if(fast === 'YES' || headStart === 'YES') {
      console.log("You got away--barely! You live to stroll through the forest another day.");
    } else {
      console.log("You're not fast and you didn't get a head start? You never had a chance! The troll eats you.");
    }
    break;
  default:
    console.log("I didn't understand your choice. Hit Run and try again, this time picking FIGHT, PAY, or RUN!");
}
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
// 2/6
var user = prompt("What's your name?");
// 3/6
var user = prompt("Are you going to FIGHT, RUN,HIDE").toUpperCase();
// 4./6
var user = prompt("What is Your Name?").toUpperCase();

switch(user) {
    case 'MOTU':
    console.log("Hey Motu");
    break;
    case 'PATLU':
    console.log("Hi Patlu");
    break;
    case 'JHATKA':
    console.log("Hello Jhatka");
    break;
    default:
    console.log("No Input");
}

// 5/6
var user = prompt("What do you want to do? We could go on an ADVENTURE, you could make a new FRIEND, or we could FIGHT").toLowerCase();

switch(user){
    case 'adventure':
        var magic= prompt ("Do you believe in magic?").toLowerCase();
        var mystical = prompt ("Do you like meeting mystical         creatures?").toLowerCase();
            if(magic&&mystical === 'yes'){
            console.log("Sweeeet. You are so ready for this adventure");
            } // no semicolon after "if"
           else{
         console.log("You're lame and don't deserve to be on this adventure. Magic is real and Mystical Creatures are AWESOME! *pfft* some people....");
            }
    break;

    case 'fight':
        var defeat = prompt("Do you really think you can defeat me?").toLowerCase();
        var god = prompt ("What are you? God?").toLowerCase();
    defeat = false;
    god = false;
    if (defeat||god){
        console.log("...How...How did you defeat me?");
    } // no semicolon after "if"
    else {
        console.log("You cannot defeat ME! Now you shall DIE! >:D");
    }
    break;
    case 'nothing':
        var music =prompt ("Hm. Do you like music?").toLowerCase();
        if (music === 'yes'){
          console.log("Sweet. I have some chill music for you to listen too. Check it out: https://soundcloud.com/feedmepeasent/sets/straight-chillen ");
        }// no semicolon after "if"
        else {
          console.log("....What are you? You know what, I can't even talk to you right now. Bye.");
        }
    break;

    default:
    console.log("That wasn't an option.");
}