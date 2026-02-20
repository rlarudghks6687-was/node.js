//reduce() - 이전 순번의 결과를 다음 순번의 매개값으로 활용

console.clear();
result = [10, 15, 20, 25, 30].reduce((accum, ele, idx) => {
  console.log(idx, "->", accum, ele);
  if (ele >= 20) {
    const li = document.createElement("li");
    li.innerText = ele;
    accum.appendChild(li);
  }
  return accum; //accum > ele ? accum : ele;
}, document.querySelector("#list"));
console.log(result);

console.clear();
//Male 사람의 급여합계
result = ary.reduce((accum, ele, idx, array) => {
  // console.log(idx, "-> ", accum, ele);
  // const { salary, gender } = ele;
  // if (gender == "Male") {
  //   accum += salary;
  // }
  if (ele.gender == "Male") {
    accum += ele.salary;
  }
  return accum;
}, 0);
console.log("Male 급여합계: " + result);

// Female의 급여가 10000 이하인 사람들의 (번호/이름(fn-ln)/이메일/급여)
// 새로운 배열로 생성
console.clear();
result = ary.reduce((accum, ele, idx, array) => {
  const { gender, id, first_name, last_name, salary, email } = ele;
  if (gender == "Female" && salary <= 10000) {
    const obj = { id, name: first_name + "-" + last_name, email, salary };
    accum.push(obj);
  }
  return accum;
}, []);
console.log(result);
