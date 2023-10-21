// console.log("Hello, Mary");
//Chapter 6, page 120///////////////////////////////////////////////////////////////////////////////////////////////////////

// const myName = "Mary";
// const myMomName = "Evgeniya";
// const myDadName = "Michael";

// let name = prompt("Fill your NAME, please!", "Your NAME");

// if (name === myName) {
//   console.log("Hello, " + myName + "!");
// } else if (name === myMomName) {
//   console.log("Hello, " + myMomName + "!");
// } else if (name === myDadName) {
//   console.log("Hello, " + myDadName + "!");
// } else {
//   console.log("Hello, stranger!");
// }

// switch (name.toLowerCase()) {
//   case myName.toLowerCase():
//     alert("Hello, " + myName + "!");
//     break;
//   case myMomName.toLowerCase():
//     alert("Hello, " + myMomName + "!");
//     break;
//   case myDadName.toLowerCase():
//     alert("Hello, " + myDadName + "!");
//     break;
//   default:
//     alert("Hello, stranger!");
// }

//Chapter 6, page 128///////////////////////////////////////////////////////////////////////////////////////////////////////

//Напишіть цикл, що видасть вам усі числа, що кратні 3 у числовому діапазоні до 10000.
//Перепишіть цей цикл за дапомогою while-циклу.

//Chapter 6, page 129///////////////////////////////////////////////////////////////////////////////////////////////////////
//#1 Напишіть for цикл, який змінюватиме масив з тваринами, роблячи їх "awesome";

// const animals = ["Cat", "Fish", "Lemur", "Komodo Dragon"];

// for (let i = 0; i < animals.length; i++) {
//     animals[i] = "Awesome " + animals[i];
// }
// console.log(animals)

//#2 Створіть генератор випадкових рядків, який створюватиме слова, довжиною в 6 букв. Починайте із рядка, що міститиме всі літери абетки.

// const alphabet = "abcdefghijklmnopqrstuvwxyz";
// let randomString = "";
// while(randomString.length < 6){
//     randomString += (alphabet[Math.floor(Math.random() * alphabet.length)]);
// }
// console.log(randomString);

//#3 Перетворіть свій текст на h4ck3r sp34k.

// const input = "javascript is awesome";
// let output = "";

// for (let i = 0; i < input.length; i++) {
// //   if (input[i] === "a") {
// //     output += "4";
// //   } else if (input[i] === "e") {
// //     output += "3";
// //   } else if (input[i] === "i") {
// //     output += "1";
// //   } else if (input[i] === "o") {
// //     output += "0";
// //   } else {
// //     output += input[i];
// //   }

//   switch (input[i]) {
//     case "a":
//       output += "4";
//       break;
//     case "e":
//       output += "3";
//       break;
//     case "i":
//       output += "1";
//       break;
//     case "o":
//       output += "0";
//       break;
//     default:
//       output += input[i];
//   }
// }

// console.log(output);

//Chapter 7, page 153///////////////////////////////////////////////////////////////////////////////////////////////////////
//Гра "Шибениця"

// const words = [
//   "javascript",
//   "monkey",
//   "amazing",
//   "pancake",
//   "elephant",
//   "icecream",
// ];

// let word = words[Math.floor(Math.random() * words.length)];
// console.log(word);

// const answerArray = [];
// for (let i = 0; i < word.length; i++) {
//   answerArray[i] = "_";
//   // answerArray.push("_");
// }
// console.log(answerArray);
// let remainingLetters = word.length;
// let remainingAttempts = 15;

// while (remainingLetters > 0 && remainingAttempts > 0) {
//   alert("Guess the word " + answerArray.join(" "));
//   switch (remainingAttempts) {
//     case 0:
//       alert("Game over!");
//       break;
//     case 1:
//       alert(remainingAttempts + " attempt left");
//       break;
//     default:
//       alert(remainingAttempts + " attempts left");
//   }
//   let guess = prompt("Guess a letter, or click Cancel to stop playing.");
//   if (guess === null) {
//     alert("Game over!");
//     break;
//   } else if (guess.length !== 1) {
//     alert("Please enter a single letter.");
//   } else if (answerArray.includes(guess.toLowerCase())) {
//     alert("Letter " + guess.toLowerCase() + " is already opened!");
//     remainingAttempts++;
//   } else {
//     for (let j = 0; j < word.length; j++) {
//       if (word[j] === guess.toLowerCase()) {
//         answerArray[j] = guess.toLowerCase();
//         remainingLetters--;
//       }
//     }
//   }
//   remainingAttempts--;
// }
// alert(answerArray.join(" "));
// alert("Good job! The answer was " + word);

//Chapter 8, page 173///////////////////////////////////////////////////////////////////////////////////////////////////////
//#1 Рахуємо з функціями 36325 * 9824 + 777.

// function add(a, b){
//   return a + b;
// };

// function multiply(a, b){
//   return a * b;
// };

// console.log(add(multiply(36325, 9824), 777));

//#2 Напишіть функцію, яка перевіряє чи два масиви є однакові.

// function areArraysSame(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   for (let i = 0; i < arr1.length; i++) {
//     if(arr1[i] !== arr2[i]){
//       return false;
//     }
//   }
//   return true;
// }
//  console.log(areArraysSame([1, 2, 3], [4, 5, 6]));
//  console.log(areArraysSame([1, 2, 3], [1, 2, 3]));
//  console.log(areArraysSame([1, 2, 3], [1, 2, 3, 4]));

//#3 Створюємо гру Шибениця, використовуючи функції.

const words = [
  "javascript",
  "monkey",
  "amazing",
  "pancake",
  "elephant",
  "icecream",
];

let word = pickWord(words);

function pickWord(arr) {
  return arr[Math.floor(Math.random() * arr.length)]; //повертаємо випадкове число;
}

const answerArray = setupAnswerArray(word);
function setupAnswerArray(word) {
  const ansArr = [];
  for (let i = 0; i < word.length; i++) {
    ansArr[i] = "_";
  }
  return ansArr; //повертаємо масив відповідей;
}

let remainingLetters = word.length;
let remainingAttempts = 15;

while (remainingLetters > 0 && remainingAttempts > 0) {
  showPlayerProgress(answerArray);
  switch (remainingAttempts) {
    case 0:
      alert("Game over!");
      break;
    case 1:
      alert(remainingAttempts + " attempt left");
      break;
    default:
      alert(remainingAttempts + " attempts left");
  }
  let guess = getGess();

  if (guess === null) {
    alert("Game over!");
    break;
  } else if (guess.length !== 1) {
    alert("Please enter a single letter.");
  } else if (answerArray.includes(guess.toLowerCase())) {
    alert("Letter " + guess.toLowerCase() + " is already opened!");
    remainingAttempts++;
  } else {
    let correctGuesses = updateGameState(guess, word, answerArray);
    remainingLetters -= correctGuesses;
  }
  remainingAttempts--;
}
showAnswerAndCongratulatePlayer(answerArray, word);

function showPlayerProgress(answerArray) {
  alert("Guess the word " + answerArray.join(" ")); //Використовуємо alert, щоб показати гравцю його прогрес;
}

function getGess() {
  return prompt("Guess a letter, or click Cancel to stop playing."); //Використовуємо запит на введення, щоб отримати варіант відповіді;
}

function updateGameState(guess, word, answerArray) {
  let guessedLetter = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === guess.toLowerCase()) {
      answerArray[i] = guess.toLowerCase(); //Оновлюємо масив відповідей та повертаємо число, що показує ск разів даний варіант
      guessedLetter += 1; //відповіді фігурує у слові, щоб масив remainingLetters міг оновитися;
    }
  }
  return guessedLetter;
}

function showAnswerAndCongratulatePlayer(answerArray, word) {
  alert(answerArray.join(" ")); //Використовуємо alert, щоб показати відповідь та привітати гравця.
  alert("Good job! The answer was " + word);
}

