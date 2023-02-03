let state = 0;
let points = 0;
const chk1 = document.getElementById("op1");
const chk2 = document.getElementById("op2");
const chk3 = document.getElementById("op3");
let answers = [];
let mapArray = []; // Yes, i know that i could just use Array[][], but i like Map, so i used both here

// I dont really like using prompt. its a requirement...
const playerName = document.getElementById("inputName");
const btnNext = document.getElementById("btnNext");
const mapQA = new Map();
const audio = new Audio("./assets/resources/correctAns.mp3");
const btnSetName = document.getElementById("btnSetName");
const btnClearData = document.getElementById("btnClearData");
const leaderboard = document.getElementById("leaderboard");


getLeaderboard();
if (localStorage.getItem("name")) {
  getPlayerData();
}
fillMap();
// Small optimization from last time
mapArray = Array.from(mapQA);
getQuestions(state);
console.log(audio);

// Load leaderboard ///// SOON /////
function getLeaderboard() {

}

//
// Get player data (from prompt as of now, from cache also in the near future), check for possible hijacking chars
//
function getPlayerData() {
  if (localStorage.getItem("name")) {
    if (
      playerName.value == "") {

      playerName.value = localStorage.getItem("name");
    }
    if (points == 0) {
      if (playerName.value == localStorage.getItem("name"))
        document.getElementById("score").textContent = localStorage.getItem("score");
    }
  }
}

//
//  Since im not using a database, the questions and their
//  answers are hardcoded here as hashmap (key, value)
//
function fillMap() {
  mapQA.set("Where did Lionel Messi get married?", "Rosario");
  mapQA.set("Where is Bangladesh located?", "Asia");
  mapQA.set("Which year did Japan attack Pearl Harbor?", "1941");
  mapQA.set("How many FIFA World Championships has France won ?", "2");
  mapQA.set(
    "Which is the name of the first nuclear powered submarine?",
    "USS. Nautilus"
  );
  mapQA.set("Where is Ciudad del Cabo located?", "South Africa");
  mapQA.set("Which is world's largest country?", "Russia");
  mapQA.set(
    "Which year was that Germany surrendered to the Allies during 2nd World War?",
    "1945"
  );
  mapQA.set("Who did write 'The Lord of the Rings'?", "J.R.R. Tolkien");
  mapQA.set("Which year did USA become independant? ", "1776");
  mapQA.set(
    "How many Formula 1 World Championships did Juan Manuel Fangio win?",
    "5"
  );
  mapQA.set("How great Lionel Messi is?", "There arent enough words for that");
  mapQA.set(
    "Which year was it when humans first set foot on the moon?",
    "1969"
  );
  mapQA.set("Between which years was the Eiffel Tower built?", "1887 - 1889");
  mapQA.set(
    "How many Tennis Master Championships did David Nalbandian win?",
    "1"
  );
}

//
//  Sets the question to the first question of the hashmap, then sets the question to the one located at index = state from our questions
//
function getQuestions(state) {
  console.log(state);
  if (state < mapArray.length) {
    document.getElementById("question").textContent = mapArray[state][0];
    fillOptions(state);
  } else {
    console.log("Good job!. Your final score: " + points);
    console.log("Final answers: ");

    //So.. working with arrays then..
    answers.forEach((element, index) => {
      console.log(`${index} - ${element}`);
      // and thats the 2nd way to print any variable, just in case that I did miss
      // any output requirement
    });

    //There is nothing to find or filter in my prototype, but here you are, an array.includes() use
    try {
      console.log(answers.includes("There arent enough words for that"));
    } catch (error) {
      //array.find() returns undefined if not exists, so we will be filtering that here as i wouldnt really use it if it wasnt because of a requirement
      console.error("There arent enough words for Messi");
    }
  }
}

//
//  Decides where the correct answer is located (random between
//  first and third so every game is different
//
function fillOptions() {
  switch (Math.floor(Math.random() * 3) + 1) {
    case 1: {
      document.getElementById("opLbl1").textContent = mapArray[state][1];
      getMoreOptions(2, 3);
      break;
    }
    case 2: {
      document.getElementById("opLbl2").textContent = mapArray[state][1];
      getMoreOptions(1, 3);
      break;
    }
    case 3: {
      document.getElementById("opLbl3").textContent = mapArray[state][1];
      getMoreOptions(1, 2);
      break;
    }
  }
}

//
//  Adds 2 extra options so the user can choose
//
function getMoreOptions(slot1, slot2) {
  const option1 = document.getElementById("opLbl" + slot1);
  //console.log(option1 + " " + slot1);
  const option2 = document.getElementById("opLbl" + slot2);
  // console.log(option2 + " " + slot2);

  switch (state) {
    case 0: {
      option1.textContent = "Santa Fe";
      option2.textContent = "Buenos Aires";
      break;
    }
    case 1: {
      option1.textContent = "Europa";
      option2.textContent = "Africa";
      break;
    }
    case 2: {
      option1.textContent = "1937";
      option2.textContent = "1939";
      break;
    }
    case 3: {
      option1.textContent = "3";
      option2.textContent = "0";
      break;
    }
    case 4: {
      option1.textContent = "USN. Enterprise";
      option2.textContent = "USN. Yorktown";
      break;
    }
    case 5: {
      option1.textContent = "Mexico";
      option2.textContent = "Uruguay";
      break;
    }
    case 6: {
      option1.textContent = "China";
      option2.textContent = "Canada";
      break;
    }
    case 7: {
      option1.textContent = "1943";
      option2.textContent = "1944";
      break;
    }
    case 8: {
      option1.textContent = "George R.R. Martin";
      option2.textContent = "Arthur Conan Doyle";
      break;
    }
    case 9: {
      option1.textContent = "1786";
      option2.textContent = "1754";
      break;
    }
    case 10: {
      option1.textContent = "7";
      option2.textContent = "3";
      break;
    }
    case 11: {
      option1.textContent = "Bigger than Hagrid";
      option2.textContent = "Dragon Sized";
      break;
    }
    case 12: {
      option1.textContent = "1968";
      option2.textContent = "1967";
      break;
    }
    case 13: {
      option1.textContent = "1947-1949";
      option2.textContent = "1889-1991";
      break;
    }
    case 14: {
      option1.textContent = "0";
      option2.textContent = "3";
      break;
    }
  }
}

//
//  Button event listener, validates the answer and adds points
//
//  Doing any type of mathematical operation seems like a requirement, so.. points+=10 sould be enough to think its done..
//
btnNext.addEventListener("click", () => {
  if (state < mapQA.size) {
    if (chk1.checked) {
      if (getOptions(1) == mapArray[state][1]) {
        points += 10;
        document.getElementById("score").textContent = points;
        localStorage.setItem("score", document.getElementById("score").textContent);
        Beep();
      }
      // Using Arrays is a requirement, so lets just store all answers there either be wrong or right ones
      answers.push(document.getElementById("opLbl1").textContent);
    } else if (chk2.checked) {
      if (getOptions(2) == mapArray[state][1]) {
        points += 10;
        document.getElementById("score").textContent = points;

        localStorage.setItem("score", document.getElementById("score").textContent);
        Beep();
      }
      // Using Arrays is a requirement, so lets just store all answers there either be wrong or right ones
      answers.push(document.getElementById("opLbl2").textContent);
    } else if (chk3.checked) {
      if (getOptions(3) == mapArray[state][1]) {
        points += 10;
        document.getElementById("score").textContent = points;

        localStorage.setItem("score", document.getElementById("score").textContent);
        Beep();
      }
      // Using Arrays is a requirement, so lets just store all answers there either be wrong or right ones
      answers.push(document.getElementById("opLbl3").textContent);
    } else {
      wrongAnswer();
      // Actually its just a "game over" or no radial selected button. it
      // wont turn red even if your answer is wrong because
      // i would then need reset its color on next question, and that next
      // question wouldnt give enough FPS for a human to be capable
      // to distinguish the color change.. so its red only on game over or no radial selected :)
    }
    if (chk1.checked || chk2.checked || chk3.checked) {
      // Next code line is just a requirement.. i HAVE to code a console.log()
      console.log("Wohoo. Next question incoming!. Current points: " + points);
      resetButton();
      state++;
      getQuestions(state);
    }
  } else {
    wrongAnswer();
    // Actually its just a "game over" or no radial selected button. it
    // wont turn red even if your answer is wrong because
    // i would then need reset its color on next question, and that next
    // question wouldnt give enough FPS for a human to be capable
    // to distinguish the color change.. so its red only on game over or no radial selected :)

    // add user data to leaderboard on game over. leadercount will be usefull
    // on next update, need node for what i have in mind
    const leader = new player(localStorage.getItem('name'), localStorage.getItem('score'));
    localStorage.setItem('leaderboard', JSON.parse(leader));
    console.log(leader);
    localStorage.setItem('leadersCount', localStorage.getItem('leadersCount') + 1);



    // Next code line is just a requirement.. i HAVE to code a console.log()
    console.log(answers);
  }
});

btnSetName.addEventListener("click", () => {

  if (
    playerName.value != "" &&
    !playerName.value.includes("<") &&
    !playerName.value.includes(">") &&
    !playerName.value.includes(";")

  )

    localStorage.setItem("name", playerName.value);

  const leader = new player(localStorage.getItem('name'), localStorage.getItem('score'));
  localStorage.setItem('leaderboard', JSON.stringify(leader));
  console.log(leader);
  localStorage.setItem('leadersCount', localStorage.getItem('leadersCount') + 1);

});

btnClearData.addEventListener("click", () => {

  localStorage.clear();
  points = 0;
  state = 0;
  document.getElementById("score").textContent = points;
  playerName.value = "";

});

//
//  Resets radials and button color on next question
//
function resetButton() {
  btnNext.style.backgroundColor = "#ffff";
  btnNext.style.color = "#000000";
  chk1.checked = false;
  chk2.checked = false;
  chk3.checked = false;
}

//
// Sets button color on bad answer or no radial selected
//
function wrongAnswer() {
  btnNext.style.backgroundColor = "#ff0000";
  btnNext.style.color = "#ffff";
}

//
//  Returns selected answer text
//
function getOptions(optionNumber) {
  const option = document.getElementById("opLbl" + optionNumber).textContent;
  return option;
}

//
// Plays a sound on correct answer
//
function Beep() {
  audio.play();
}
