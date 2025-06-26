// завдання 1.2.3
let car1 = new Object();
car1.color = "magenta";
car1.maxSpeed = 180;
car1.driver = {
  name: "Айб Олександр",
  category: "C",
  personalLimitations: "No driving at night"
};
car1.tuning = true;
car1["number of accidents"] = 0;

// завдання 1.2.4
let car2 = {
  color: "yellow",
  maxSpeed: 200,
  driver: {
    name: "Айб Олександр",
    category: "B",
    personalLimitations: null
  },
  tuning: false,
  "number of accidents": 2
};

// завдання 1.2.5
car1.drive = function() {
  console.log("I am not driving at night");
};
car1.drive();

// завдання 1.2.6
car2.drive = function() {
  console.log("I can drive anytime");
};
car2.drive();

// завдання 1.2.7
function Truck(color, weight, avgSpeed, brand, model) {
  this.color = color;
  this.weight = weight;
  this.avgSpeed = avgSpeed;
  this.brand = brand;
  this.model = model;

  // завдання 1.2.9
  this.trip = function() {
    if (!this.driver) {
      console.log("No driver assigned");
    } else {
      console.log(`Driver ${this.driver.name} ${this.driver.nightDriving ? "drives at night" : "does not drive at night"} 
        and has ${this.driver.experience} years of experience.`);
    }
  }
}

// завдання 1.2.8
Truck.prototype.AssignDriver = function(name, nightDriving, experience) {
  this.driver = {
    name: name,
    nightDriving: nightDriving,
    experience: experience
  };
};

// завдання 1.2.10
let truck1 = new Truck("lime", 7000, 75, "MAN", "TGX");
truck1.AssignDriver("Айб Олександр", true, 5);
truck1.trip();

let truck2 = new Truck("grey", 6000, 80, "Volvo", "FH");
truck2.AssignDriver("Айб Олександр", false, 3);
truck2.trip();

// завдання 1.2.12 – 1.2.15
class Square {
  constructor(a) {
    this.a = a;
  }

  static help() {
    console.log("Квадрат - це чотирикутник з рівними сторонами");
  }

  length() {
    return this.a * 4;
  }

  square() {
    return this.a ** 2;
  }

  info() {
    console.log(`Сторони: ${this.a}, ${this.a}, ${this.a}, ${this.a}`);
    console.log("Кути: 90°, 90°, 90°, 90°");
    console.log(`Периметр: ${this.length()}`);
    console.log(`Площа: ${this.square()}`);
  }
}

// завдання 1.2.16 – 1.2.17
class Rectangle extends Square {
  constructor(a, b) {
    super(a);
    this.b = b;
  }

  static help() {
    console.log("Прямокутник - це чотирикутник з протилежними рівними сторонами");
  }

  length() {
    return 2 * (this.a + this.b);
  }

  square() {
    return this.a * this.b;
  }

  info() {
    console.log(`Сторони: ${this.a}, ${this.b}, ${this.a}, ${this.b}`);
    console.log("Кути: 90°, 90°, 90°, 90°");
    console.log(`Периметр: ${this.length()}`);
    console.log(`Площа: ${this.square()}`);
  }

  get A() { return this.a; }
  set A(val) { this.a = val; }
  get B() { return this.b; }
  set B(val) { this.b = val; }
}

// завдання 1.2.18 – 1.2.19
class Rhombus extends Square {
  constructor(a, alpha, beta) {
    super(a);
    this.alpha = alpha;
    this.beta = beta;
  }

  static help() {
    console.log("Ромб - це чотирикутник з рівними сторонами");
  }

  square() {
    return this.a ** 2 * Math.sin(this.alpha * Math.PI / 180);
  }

  info() {
    console.log(`Сторони: ${this.a}, ${this.a}, ${this.a}, ${this.a}`);
    console.log(`Кути: ${this.alpha}°, ${this.beta}°, ${this.alpha}°, ${this.beta}°`);
    console.log(`Периметр: ${this.length()}`);
    console.log(`Площа: ${this.square().toFixed(2)}`);
  }

  // завдання 1.2.22
  get A() { return this.a; }
  set A(val) { this.a = val; }

  get Alpha() { return this.alpha; }
  set Alpha(val) { this.alpha = val; }

  get Beta() { return this.beta; }
  set Beta(val) { this.beta = val; }
}

// завдання 1.2.20 – 1.2.21
class Parallelogram extends Rectangle {
  constructor(a, b, alpha, beta) {
    super(a, b);
    this.alpha = alpha;
    this.beta = beta;
  }

  static help() {
    console.log("Паралелограм - це чотирикутник з парами паралельних протилежних сторін");
  }

  square() {
    return this.a * this.b * Math.sin(this.alpha * Math.PI / 180);
  }

  info() {
    console.log(`Сторони: ${this.a}, ${this.b}, ${this.a}, ${this.b}`);
    console.log(`Кути: ${this.alpha}°, ${this.beta}°, ${this.alpha}°, ${this.beta}°`);
    console.log(`Периметр: ${this.length()}`);
    console.log(`Площа: ${this.square().toFixed(2)}`);
  }
}

// завдання 1.2.23
Square.help();
Rectangle.help();
Rhombus.help();
Parallelogram.help();

// завдання 1.2.24
let sq = new Square(4);
let rect = new Rectangle(4, 6);
let rhomb = new Rhombus(5, 120, 60);
let para = new Parallelogram(5, 7, 110, 70);

sq.info();
rect.info();
rhomb.info();
para.info();

// завдання 1.2.25
function Triangular(a = 3, b = 4, c = 5) {
  return { a, b, c };
}

// завдання 1.2.26
console.log(Triangular(5, 6, 7));
console.log(Triangular());
console.log(Triangular(5, 12, 13));

// завдання 1.2.27
function PiMultiplier(x) {
  return function() {
    return Math.PI * x;
  };
}

// завдання 1.2.28
let piTimes2 = PiMultiplier(2);
let piTimes3div2 = PiMultiplier(1.5);
let piDiv2 = PiMultiplier(0.5);

console.log(piTimes2());
console.log(piTimes3div2());
console.log(piDiv2());

// завдання 1.2.29
function Painter(color) {
  return function(obj) {
    if (obj.type) {
      console.log(`${color} ${obj.type}`);
    } else {
      console.log("No ‘type’ property occurred!");
    }
  };
}

// завдання 1.2.30
let PaintBlue = Painter("blue");
let PaintRed = Painter("red");
let PaintYellow = Painter("yellow");

// завдання 1.2.31
let obj1 = { maxSpeed: 280, type: "Sportcar", color: "magenta" };
let obj2 = { type: "Truck", avgSpeed: 90, loadCapacity: 2400 };
let obj3 = { maxSpeed: 180, color: "purple", isCar: true };

PaintBlue(obj1);
PaintRed(obj2);
PaintYellow(obj3);
