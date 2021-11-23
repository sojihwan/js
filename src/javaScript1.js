function Animal(type, name, sound) {
  this.type = type;
  this.name = name;
  this.sound = sound;
}
Animal.prototype.say = function () {
  console.log(this.sound);
};

function Dog(name, sound) {
  Animal.call(this, "wofe", name, sound);
}

function Cat(name, sound) {
  Animal.call(this, "Lion", name, sound);
}

Dog.prototype = Animal.prototype;
Cat.prototype = Animal.prototype;

const dog = new Animal("wofe", "A", "Aouuuuu");
const cat = new Animal("Lion", "king", "won won");

dog.say();
cat.say();
