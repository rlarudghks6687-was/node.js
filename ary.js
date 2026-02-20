//ary.js
console.clear();

// 급여가 10000 적은 사람들
const less_then_10000 = (ele, idx) => {
  console.log(ele, idx);
  if (ele.salary < 10000) {
    return true;
  }
  return false;
};

// 여자 중에서 8000 이상인 사람
const more_then_8000 = (ele, idx) =>
  ele.gender == "Female" && ele.salary >= 8000;

//filter(): 조건을 만족하는 요소
result = ary.filter(more_then_8000).map((ele, idx, array) => {
  //map(): A -> A'(매핑)
  //id/first_name/last_name/email/gender/salary
  //no/name/gender/salary
  //객체구조분해
  const { id, first_name, last_name, gender, email, salary } = ele;
  //
  const obj = {
    no: id,
    name: first_name + "-" + last_name,
    gender,
    salary,
  };
  return obj;
});
console.log(result);
