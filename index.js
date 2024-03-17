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
