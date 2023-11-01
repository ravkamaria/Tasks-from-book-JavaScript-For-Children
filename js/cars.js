//Chapter 12, page 241//////////////////////////////////////////////////////////////////////////////////////////////////////
//#1, page 244 /////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Малюємо у конструкторі автомобілів.
//№2, page 244 /////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Додаємо властивість speed.
//#3, page 244 /////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Спортивні авто. Модифікуємо методи, щоб вони приймали єдиний аргумент - кількість пікселів, на яку треба здійснити рух.

const Car = function (x, y) {
  this.x = x;
  this.y = y;
  this.draw();
};

function countRandomSpeed(){
  return Math.floor(Math.random() * 15);
}

Car.prototype.draw = function () {
  const carHtml = '<img src="/images/car.png">';
  this.carElement = $(carHtml);
  this.carElement.css({
    position: "absolute",
    left: this.x,
    top: this.y,
  });
  $("body").append(this.carElement);
};
Car.prototype.moveRight = function (value) {
  this.x += value;
  this.carElement.css({
    left: this.x,
    top: this.y,
  });
};
Car.prototype.moveLeft = function (value) {
  this.x -= value;
  this.carElement.css({
    left: this.x,
    top: this.y,
  });
};
Car.prototype.moveUp = function (value) {
  this.y -= value;
  this.carElement.css({
    left: this.x,
    top: this.y,
  });
};
Car.prototype.moveDown = function (value) {
  this.y += value;
  this.carElement.css({
    left: this.x,
    top: this.y,
  });
};

let tesla = new Car(20, 20);
let nissan = new Car(100, 200);
// tesla.moveRight(distance);
// tesla.moveLeft(distance);
// tesla.moveUp();
// tesla.moveDown();
let nissanIntervalID = setInterval(function(){nissan.moveRight(countRandomSpeed())}, 1000);
let teslaIntervalID = setInterval(function(){tesla.moveRight(countRandomSpeed())}, 500);