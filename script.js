//based on if it is a weekday, or a vacation, this function determines if you can sleep in or not
function sleepIn(weekday, vacation) {
    if (weekday==false){
        return true
    }else{
        if (weekday==true &&  vacation==true){
            return true
        }else{
            return false
        }
    }
}

//given whether monkey a, monkey b, or both are smiling, this functions determines if there is monkey trouble
//monkey trouble happens when one monkey isn't smiling.

function monkeyTrouble(a_smile, b_smile){
    if (a_smile==b_smile){
        return false
    }else{
        return true
    }
}

//Given a string and an integer greater than 0, this function return a larger string that is n copies of
// the original string.

function stringTimes(string, n){
    var x=""
    for(var i=0; i<n; i++){
        x += string
    }
    return x
}


//Given a string and an integer greater than 0, this function takes the first three characters of the string and
//duplicates it n times
function front_times(string, n){
    var front = string[0] + string[1] + string[2]
    var x = ""
    for(var i=0; i<n; i++){
        x += front
    }
    return x
}


//Given a string, this function returns a new string made of every other char starting with the first, so "Hello"
// yields "Hlo".
function stringBits(word){
    var x = ""
    for(var i=0; i<word.length; i+=2){
        x+= word[i];
    }
    return x;
}


// This function computes the result of the traffic stop, encoded as an int value: 0=no ticket, 1=small ticket, 2=big
// ticket. If speed is 60 or less, the result is 0. If speed is between 61 and 80 inclusive, the result is 1. If speed
// is 81 or more, the result is 2. Unless it is your birthday -- on that day, your speed can be 5 higher in all cases.
function caughtSpeeding(speed, birthday){

    if (birthday==false){
        if(speed<= 60) {
            return 0;
            }
        if(speed<=80 && speed>=61){
            return 1;
            }else{
                return 2;
            }
    }else{
        if(speed<= 65){
           return 0
        }
        if(speed<=85 && speed>=66){
            return 1
            }else{
                return 2
            }
    }
}

//Given a number, this function returns the string form of the number followed by "!". So the int 6 yields "6!".
// Except if the number is divisible by 3  in which "Fizz" is returned instead, and if the number is divisible by 5
// "Buzz" is returned, and if divisible by both 3 and 5, "FizzBuzz".
function fizzBuzz(n){
    var x = ""
    if(n%3==0 && n%5==0){
        return "FizzBuzz";
    }
    if(n%3==0){
        return "Fizz";
    }
    if(n%5==0){
        return "Buzz";
    }else{
        newStr = n+ "!"
        return newStr
    }
}

//This function Returns the int outcome of the party encoded as 0=bad, 1=good, or 2=great. A party is good (1) if both
// tea and candy are at least 5. If either tea or candy is at least 2x the amount of the other one, the party is great
// (2). If either tea or candy is less than 5, the party is always bad (0).
function teaParty(tea, candy){
    if (tea < 5 || candy < 5) {
        return 0
    }else {
        if (tea >= 2 * candy || candy >= 2 * tea) {
            return 2;
        } else {
            return 1
        }
    }
}


//Given 2 int values greater than 0, this function returns whichever value is nearest to 21 without going over.
//If they both go over, it returns 0.
function blackjack(x, y){
    if(x>21 && y>21){
        return 0;
    }else {
        if (x > 21 && y <= 21) {
            return y;
        }
        if (y > 21 && x <= 21) {
            return x;
        }
        if (21 - x > 21 - y) {
            return y;
        }
        if (21 - y > 21 - x) {
            return x;
        }
    }
}


//Given 3 int values, a b c, this function returns their sum. However, if one of the values is the same as another of
// the values, it does not count towards the sum.
function loneSum(a, b, c){
    if ( a != b && b != c && a != c){
        return a+=b+=c;
    }else {
        if (a==b && b==c){
            return 0
        }
        if (b == c) {
            return a
        }
        if (a==c) {
            return b
        }
        if (b==a){
            return c
        }
    }
}


function tester() {

    document.getElementById("output").innerHTML = loneSum(4, 5, 3);
    document.getElementById("output2").innerHTML = loneSum(2, 4, 37);
    document.getElementById("output3").innerHTML = loneSum(6, 3, 2);

}

