//Chapter 11, page 214 //////////////////////////////////////////////////////////////////////////////////////////////////////
//Гра: "Знайди захований скарб!"/////////////////////////////////////////////////////////////////////////////////////////////
// + tasks from page 225/////////////////////////////////////////////////////////////////////////////////////////////////////

function getRandomNumber(size) {
  return Math.floor(Math.random() * size); //отримуємо рандомне число від 0 до розмірів картинки;
}
const width = 600;
const height = 600;
let target = {
  x: getRandomNumber(width), //рандомне місце на карті (розмір карти 400Х400);
  y: getRandomNumber(height),
};

const maxAttempts = 25;
let attampt = 0;

function getDistance(event, target) {
  const diffX = event.offsetX - target.x; //вираховує відстань між заданою точкою для пошуку (ціллю) і місцем кліку гравця;
  const diffY = event.offsetY - target.y;
  return Math.sqrt(diffX * diffX + diffY * diffY); //повертає відстань (корінь квадратний гіпотенузи, беручи його з теореми Піфагора);
}

function getDistanceHint(distance) {
  if (distance < 20) {
    return "Boiling hot!🔥🔥🔥"; //отримуємо рядок, що показує відстань;
  } else if (distance < 40) {
    return "Really hot! ☀️☀️☀️";
  } else if (distance < 80) {
    return "Hot! 🌤🌤🌤";
  } else if (distance < 120) {
    return "Warm! 🌥🌥🌥";
  } else if (distance < 160) {
    return "Cold! ☁️☁️☁️";
  } else if (distance < 320) {
    return "Really cold! ⛈⛈⛈";
  } else if(distance < 540) {
    return "Really really cold! 🌨🌨🌨"
  } else {
    return "Freezing! ❄️❄️❄️";
  }
}

$("#map").click(function (event) {
  attampt++;
  const distance = getDistance(event, target); //отримуємо відстань між ціллю і кліком гравця;
  const distanceHint = getDistanceHint(distance); //виводимо на екран рядок з підказкою;
  const attemptsLeft = maxAttempts - attampt;
  $("#distance").text(distanceHint);
  $("#attemps").text(`${attemptsLeft} attempts left!`)
  if (distance < 15) {
    alert("You WON!!! Found the treasure in " + attampt + " clicks!"); //виводимо повідомлення, що гравець переміг!
    $("#distance").text("");
    $("#attemps").text("")
  }
  if(attampt === 25){
    $("#distance").text("");
    $("#attemps").text("");
    alert("GAME OVER!");
  }
});

