class Animal {
  constructor(type, neme, sound) {
    this.type = type;
    this.neme = neme;
    this.sound = sound;
  }
  say() {
    console.log(this.sound);
  }
}

class Dag extends Animal {
  constructor(name, sound) {
    super("wofe", name, sound);
  }
}

class Cat extends Animal {
  constructor(name, sound) {
    super("Lion", name, sound);
  }
}

const dog = new Dag("멍멍이", "멍멍");
const cat = new Cat("야옹이", "야옹");

dog.say;
cat.say;
