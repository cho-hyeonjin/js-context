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
    this.getAge = this.getAge.bind(this); // this를 고정시키는 Function 기본 제공 메서드
  }

  getAge() {
    return this.age;
  }

  // Lexical Context를 사용하여 this 고정하기.
  // 화살표 함수의 this는 화살표 함수를 생성하는 Lexical 환경의 this로 고정된다.
  getName = () => this.name;
}

const p1 = new Person("Cho Hyeon jin", 20);

p1.getAge();

const myAge = p1.getAge;

// myAge.call(p1); // 메번 이렇게 call로 지정해주는 것도 번거로운 일
myAge(); // Person 클래스에서 getAge를 bind 했기 때문에 이제 그냥 호출해도 p1.getAge()와 동일한 값이 나옴.  (p1은 Person의 인스턴스)

// 화살표 함수로 Lexical Context를 활용하는 방식으로 this 고정
p1.getName();

const x = p1.getName;

x();
