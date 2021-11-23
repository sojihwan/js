const array = [1, 2];
let text = array.length === 0 ? "null" : "find";
console.log(text);

function print(person) {
  if (!person) {
    return;
  }
  console.log(person.name);
}
const person = {
  name: "John"
};

print(person);
//거짓 =>진실
console.log(!undefined);
console.log(!null);
console.log(!0);
console.log(!"");
console.log(!NaN);
console.log(!false);
//진실 =>거짓
console.log(!3);
console.log(!"h");
console.log(!["arr"]);
console.log(![]);
console.log(!{});

const v = {};

const truthy = !!v;
console.log(truthy);

const dog = {
  name: "멍멍이"
};

function getName(animal) {
  return animal && animal.name;
}
console.log(getName(dog));
