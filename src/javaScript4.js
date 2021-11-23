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
//배열에서의 래스트는 맨 마지막에 와야함
function sum(...rest) {
  return rest.reduce((acc, curr) => acc + curr, 0);
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(sum(...numbers));

function max(...ret) {
  const a = ret.reduce((acc, curr) => {
    if (acc < curr) {
      acc = curr;
    }
    return acc;
  }, 0);
  return a;
}

const result = max(1, 2, 3, 4, 10, 5, 6, 7);
console.log(result);
// 글로벌 스코프 전역 변수 같은거
//나머지 스코프는 지역변수
//var로 하면 overdrive가 안 됨

//호이스팅 왠만하면 피하기
//유지보수 어려움
//호출과 선언이 반대과 되는것
//babelrc에서 내용 다 지우면 막을수 있음
