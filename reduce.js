const { ary } = require("./data");

//Male 인 목록
//{Male: [{}, {}, {}, {}...{}]}
const male_member_only = (accum, ele) => {
  if (ele.gender == "Male") {
    accum.Male.push(ele);
  }
  return accum;
};
let result = ary.reduce(male_member_only, { Male: [] });
console.log(result);

const group_by_gender = (accum, ele) => {
  // ele.gender = "Male"/"Female"
  // accum["Male"] == accum.Male, accum["Female"] == accum.Female
  if (accum[ele.gender] == undefined) {
    accum[ele.gender] = []; //초기값 {Male: [], Female: []}
  }
  accum[ele.gender].push(ele.first_name);
  return accum;
};
result = ary.reduce(group_by_gender, {});
console.log(result);
