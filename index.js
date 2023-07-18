//ONLY ODDS /////
//part one
//use the arrays given in the assignment in a for loop that outputs only odd numbers
//the for loop iterates over each element in the array by using i
//the if statements checks if the number is odd by using the modulo, essentially dividing the number by 2 is not equal to 0
//the numbers that are odd will show in the output
//initialize arrays
//let numbers = [2, 4, 6, 8, 11, 20, 15, 22]; //expected outcome [ 11, 15]
//let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //expected outcome [1, 3, 5, 7, 9]
//let numbers = [70, 42, 55, 81, 21, 91, 34]; //expected outcome [55, 81, 21, 91]
//let numbers = [2, 4, 6, 8, 10, 11, 12]; //expected outcome [11]

//for loop that lets us divide the number in the array by 2 to see if it has a remainder, if it doesn't divide into the number like 11 % 2, we know its odd
//for (let i = 0; i < numbers.length; i++) {
  //let number = numbers[i];
  //if (number % 2 !== 0) {
    //now to print the outcome/test the code
    //console.log(number);
  //}
//}

//VOWEL VS CONSONANT
//part two
//initialize variables, the counts are set to zero and this is to keep track of the numbers of vowels and consonants
//in this section we are trying to seperate vowels and consonants within a given word using for loop and array.
//const word = "hello";
//const word = "ukelele";
//const word = "awesome";
//const word = "onomonopia";
//const word = "textbook";
//let consonantCount = 0;
//let vowelCount = 0;
//after assigning const to "" a string word as that variable is unchanging, let variables allow us to manipulate whats in the word. In this case keeping track of consonants and vowels.
//Using let and const provides block scope for variables, meaning they are only accessible within the block. Avoiding hoisting and accidental redeclarations.
//for (let i = 0; i < word.length; i++) {
  //const letter = word[i];
  //if letter a or letter e or letter i ect. is a vowel (the vowel count will be incremented by one) the rest (else) will be a consonant (which the consonant count will be incremented by one).
  //if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
    //vowelCount++;
  //} else {
    //consonantCount++;
  //}
//}
//${word} is used to interpolate the value of the word (variable)
//test the code using console.log, 
//console.log(`Word: ${word}`);
//console.log(`Consonants: ${consonantCount}`);
//console.log(`Vowels: ${vowelCount}`);


//REVERSE ARRAY
//part three
//initialize variables
//const numbers = [1, 3, 5, 7, 9, 11]; //expected outcome [11, 9, 7, 5, 3, 1]
//const numbers = [1, 2, 3]; //expected outcome [3, 2, 1]
//const numbers = [20, 50, 30, 60, 200]; //expected outcome [200, 60, 30, 50, 20]
//const numbers = [1, -1, 2, -3, 5, -8, 13]; //expected outcome [13, -8, 5, -3, 2, -1, 1]
//the numbers array is being checked by the if statement to see if the array has more than one element and if there is a need for reversal.
//nside the while loop, the start and end positions of the array are swapped using array destructuring and array assignment. This process continues until the start index reaches the midpoint of the array (numbers.length / 2) and the end index reaches the opposite midpoint.
//if (numbers.length > 1) {
  //let start = 0;
  //let end = numbers.length - 1;

  //while (start < end) {
    //[numbers[start], numbers[end]] = [numbers[end], numbers[start]];
    //start++;
    //end--;
  //}
//}
//check the code using console.log
//console.log(numbers);


//FIZZ BUZZ
//part four 
//if, else if to construct an old drinking game but with code
//using a for loop, If i is a multiple of 3 (i % 3 === 0), it prints "Fizz" 
//if i is a multiple of 5 (i % 5 === 0), it prints "Buzz" 
//if none of the conditions are met its prints the value
//for (let i = 1; i <= 100; i++) {
  //if (i % 3 === 0 && i % 5 === 0) {
    //checking the code using console.log (node index.js in terminal)
    //console.log("FizzBuzz");
  //} else if (i % 3 === 0) {
    //console.log("Fizz");
  //} else if (i % 5 === 0) {
    //console.log("Buzz");
 // } else {
   // console.log(i);
 // }
//}