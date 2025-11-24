// 1. Template Literals + Expressions
// a)
console.log(`5 + 7 = ${5 + 7}`);

// b) Multi-line string
const multiLine = `Line 1
Line 2
Line 3`;
console.log(multiLine);

// c) Full name using template literal
const firstName = "Kesar";
const lastName = "Tandulkar";
console.log(`Full name: ${firstName} ${lastName}`);


// 2. Arrow Functions & this
// a) Arrow function square
const square = n => n * n;
console.log(square(5)); // 25

// b) Why logs undefined
const obj = {
  value: 50,
  test: () => console.log(this.value)
};
obj.test(); // undefined because arrow functions do not have their own 'this'

// c) Using normal function to print correctly
const obj12 = {
  value: 50,
  test: function() { console.log(this.value); }
};
obj12.test();


// 3. Rest, Spread & Copying Objects
// a) Shallow copy of object
const product = { name: "Pen", price: 10 };
const productCopy = { ...product };
console.log(productCopy);

// b) Merge objects
const a = { x: 1 };
const b = { y: 2 };
const merged = { ...a, ...b };
console.log(merged);

// c) Function with rest to find max
const maxValue = (...nums) => Math.max(...nums);
console.log(maxValue(5, 10, 2)); // 10


// 4. Destructuring & Optional Chaining
// a)
const arr = [10, 20, 30];
const [a1, b1] = arr;
console.log(a1, b1);

// b)
const laptop = { brand: "Dell", ram: "8GB" };
const { brand } = laptop;
console.log(brand);

// c) Optional chaining
const info = {};
console.log(info?.profile?.name);


// 5. Scoping (let/var/const)
// a)
for (var i = 0; i < 3; i++) {}
console.log(i); // 3

// b)
for (let j = 0; j < 3; j++) {}


// c) Why const: values that should not be reassigned


// 6. Ternary Operator
let kmph = 70;
let speed = kmph > 60 ? "Fast" : "Normal";
console.log(speed);

const age = 20;
console.log(age >= 18 ? "Adult" : "Minor");

const num = -5;
console.log(num > 0 ? "Positive" : num === 0 ? "Zero" : "Negative");


// 7. Spread, Rest & Arrays
// a)
const nums = [1, 2, 3];
const newNums = [...nums, 4, 5];
console.log(newNums);

// b)
const arrA = ["x","y"];
const arrB = ["z"];
const combined = [...arrA, ...arrB];
console.log(combined);

// c) Function using rest
const printNames = (...names) => names;
console.log(printNames("A","B","C"));


// 8. Object Destructuring & Shorthand
// a)
const user = { id: 101, status: "active" };
const { id: userId, status } = user;
console.log(userId, status);

// b)
const id2 = 101;
const role = "admin";
const user2 = { id2, role };
console.log(user2);

// c) Shorthand method
const person = {
  name: "Kesar",
  greet() { console.log("Hello"); }
};
person.greet();


// 9. Template Literals (More Practice)
console.log(`Today is ${new Date().toDateString()}`);
const NAME = "Kesar";
const SCORE = 88;
console.log(`Hello ${NAME}, your score is ${SCORE}/100`);


// 10. Arrow Function Shorthands
// a)
const add = (x, y) => x + y;
console.log(add(5, 7));

// b)
const isAdult = age => age >= 18;
console.log(isAdult(20));

// c)
const double = n => n * 2;
console.log(double(4));


// 11. Spread Operator (Arrays & Objects)
// a)
const arrClone = [...nums];
console.log(arrClone);

// b)
const arrWith100 = [100, ...nums];
console.log(arrWith100);

// c) Merge objects correctly
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj);



// 12. Optional Chaining
const user3 = {
  name: "Kesar",
  address: { city: "Ramtek" }
};
console.log(user3?.address?.city);
console.log(user3?.job?.title);

const data2 = { product: { name: "Laptop" } };
console.log(data2.product?.specs?.weight);