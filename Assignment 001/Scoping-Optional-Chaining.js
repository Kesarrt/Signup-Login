let x;
var y;

if (true) {
  x = 10;
  y = 20;
}

console.log("y:", y); // 20
console.log("x:", x); // 10


const profile = {
  user: {
    details: {
      email: "test@mail.com"
    }
  }
};

console.log("Email:", profile.user?.details?.email);
console.log("Phone:", profile.user?.details?.phone);

const data = {
  product: {
    name: "Laptop",
    company: "HP",
    price: 50000
  }
};

console.log("Weight:", data.product?.specs?.weight);
