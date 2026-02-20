//promise.js
//promise 객체: pending/ fulfilled/ rejected
// fetch("./MOCK_DATA.json")
//   .then((resp) => resp.json())
//   .then((result) => {
//     console.log("result -> ", result);
//     console.log("end of prog.");
//   });

//setTimeout();
//1번째 -> 2초 작업
//2번째 -> 3초 작업
//3번째 -> 1초 작업 => 6초 작업
//비동기방식 처리가 시간상의 이점
//promise => 비동기처리를 동기방식의 코드
//promise 예제
const promise = new Promise(function (resolve, reject) {
  console.log("pro");
  resolve("OK");
  // reject("NG");
});
promise
  .then((param) => {
    console.log(param);
    return 1; // promise 처리
  })
  .then((param) => {
    console.log(param);
  })
  .catch((param) => {
    console.error(param);
  });

// 비 -> 동
// 비동기방식코드 -> 동기방식코드
let data1 = 10;

const p1 = new Promise(function (resolve) {
  setTimeout(() => {
    console.log("1번째");
    data1 += 5;
    console.log(`data -> ${data1}`);
    resolve(data1);
  }, 2000);
});
p1.then((data) => {
  return new Promise(function (resolve) {
    setTimeout(() => {
      console.log("2번째");
      data *= 2;
      console.log(`data -> ${data}`);
      resolve(data);
    }, 3000);
  });
})
  .then((data) => {
    return new Promise(function (resolve) {
      setTimeout(() => {
        console.log("3번째");
        data -= 7;
        console.log(`data -> ${data}`);
      }, 1000);
    });
  })
  .catch((err) => {
    console.log(err);
  });

// let answer = 10;
// //1번쨰 작업 -> 5를 더하고: 15
// //2번째 -> 2를 곱하고: 30
// //3번째 -> 7를 빼기: 23
// setTimeout(() => {
//   console.log("1번째");
//   answer += 5;
//   console.log(`answer => ${answer}`);
//   setTimeout(() => {
//     console.log("2번째");
//     answer *= 2;
//     console.log(`answer => ${answer}`);
//   }, 800);
//   setTimeout(() => {
//     console.log("3번째");
//     answer -= 7;
//     console.log(`answer => ${answer}`);
//   }, 1100);
// }, 1000);

// setTimeout(() => {
//   console.log("2번째");
//   answer *= 2;
//   console.log(`answer => ${answer}`);
// }, 800);

// setTimeout(() => {
//   console.log("3번째");
//   answer -= 7;
//   console.log(`answer => ${answer}`);
// }, 1100);
