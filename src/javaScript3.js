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

function getSound(ani) {
  const tasks = {
    개: () => {
      console.log("멍멍!");
    },
    고양이: () => {
      console.log("냥!~~~~");
    },
    비둘기: () => {
      console.log("구 구구 구! 구구구구구구국구");
    }
  };
  const task = tasks[ani];
  if (!task) {
    console.log("....?");
    return;
  }
  task();
}

getSound("개");
getSound("고양이");
getSound("인간");
