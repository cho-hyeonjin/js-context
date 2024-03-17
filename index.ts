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

// 컨텍스트 객체 지정하기 - (JS Function에서 기본으로 제공하는 method)인 call과 apply 이용하기
age.call(person);

// class로 Person 객체 만들기
class Person {
  name: string;
  age: Number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getAge() {
    return this.age;
  }
}

const p1 = new Person("Cho Hyeon jin", 20);

p1.getAge();

const myAge = p1.getAge;

myAge.call(p1); // 메번 이렇게 call로 지정해주는 것도 번거로운 일
