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

const s = {
  name: "리"
};
const cs = {
  ...s,
  att: "cute"
};
console.log(s === cs);
//...연산자 같은 거는 overdrive 그리고 복사 하여 원래의 const는 건들 지 않음
// {칼럼,...(래스트 변수명)} 그 칼럼을 제외하고 복사
