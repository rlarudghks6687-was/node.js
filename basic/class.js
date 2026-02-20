//class.js
//객체(Object) - 학생(개념) - 학생(실체)
//              클래스(정의) - 인스턴스(실체)
class Student {
  //값을 저장(속성) -> 학생번호, 이름, 키, 몸무게, 성적...
  constructor(studNo, studName, height) {
    this.studNo = studNo;
    this.studName = studName;
    this.height = height;
  }
  //동작을 저장(메서드)
  showInfo() {
    return `학번은 ${this.studNo}이고, 이름은 ${this.studName}`;
  }
}

//인스턴스 생성
const s1 = new Student("S001", "홍길동", 179);
console.log(s1.showInfo());
const s2 = new Student("S002", "장동길", 165);
console.log(s2.showInfo());

//인스턴스(객체 = Object)
const obj = {
  name: "Kim",
  ahr: 20,
  friends: ["Lee", "Park", "Choi"],
  pets: [
    { name: "개", age: 3, friends: ["아돌"] },
    { name: "고양이", age: 2 },
  ],
  showInfo: function () {
    return `이름은 ${this.name}`;
  },
}; //객체
console.log(obj["pets"][0]["friends"][0]);
console.log(window);
const obj1 = {
  name: "Lim",
  ahr: 21,
  showInfo: function () {
    return `이름은 ${this.name}`;
  },
}; //객체

//class Student
function Member(memberNo, memberName) {
  this.memberNo = memberNo;
  this.memberName = memberName;
  this.showInfo = function () {
    return `번호는 ${this.memberNo}, 이름은 ${this.memberName}`;
  };
}
const m1 = Member("M001", "User01");
console.log(window.showInfo());
