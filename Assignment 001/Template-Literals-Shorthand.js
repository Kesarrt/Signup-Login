const username = "Avni";
const course = "Web Development";

console.log(`Hello ${username}, welcome to the ${course} course!`);

const name = "Kesar";
const age = 21;

const student = {
  name,
  age,
  greet() {
    console.log("Hello");
  }
};

console.log(student);
student.greet();


const getFullName = (first, last) => `${first} ${last}`;

console.log(getFullName("Kesar", "Tandulkar"));
