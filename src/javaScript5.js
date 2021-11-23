function work(callback) {
  setTimeout(() => {
    const start = Date.now();
    for (let i = 0; i < 1000000000; i++) {}
    const end = Date.now();
    console.log(end - start + "ms");
    callback(end - start);
  }, 0);
}
console.log("작업 시작");
work((ms) => {
  console.log("작업이 끝났어요!");
  console.log(ms + "작업이 끝났어요!");
});
console.log("next");
//각 프로미스가 담긴 배열[]에
//await Promise.all([])한번에 시작
//await sleep(숫자(ms))
//전채중 하나는 오류다  ==try 캐치문

//Promise.race가장 빠른것이 결과물
//첫번째가 하필 오류다 ==오류
//두번째가 오류다 == 오류 없음
