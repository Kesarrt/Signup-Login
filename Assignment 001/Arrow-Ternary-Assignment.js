const isEven = n => n % 2 === 0;

console.log(isEven(4));
console.log(isEven(7));


const marks = 40;
let result = marks >= 35 ? "Pass" : "Fail";

console.log(result);


const greet = (name) => {
  const finalName = name ? name : "Guest";
  console.log(`Hello, ${finalName}`);
};

greet("Kesar");
greet();
