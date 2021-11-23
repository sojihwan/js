const animal = {
  name: "멍멍이",
  type: "늑대"
};

const { name: nickname } = animal;

console.log(nickname);
console.log(animal);

const array = [1, 2];

const [one, tow = 2] = array;

console.log(one);
console.log(tow);

const deepObject = {
  state: {
    information: {
      name: "velopert",
      languages: ["kor", "eng", "chi"]
    }
  },
  value: 5
};

const { name, languages } = deepObject.state.information;
const { value } = deepObject;

// const {
//   state:{
//     information:{
//       name,languages:[fir,sec]
//     }
//   },
//   value
// } = deepObject;

const extracted = {
  name,
  languages,
  value
};
console.log(extracted);
