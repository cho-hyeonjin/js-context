const person = {
  name: "Cho Hyeon jin",
  age: 30,
  getAge() {
    return this.age;
  },
};

person.age;
person.getAge();

const age = person.getAge;

age();

// 컨텍스트 객체 지정하기
age.call(person);
