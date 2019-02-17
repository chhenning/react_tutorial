const person = {
  name: "Mosh",
  walk() {
    console.log(this);
  },
  talk() {}
};

const w = person.walk.bind(person);
w();

console.log("Hello");
