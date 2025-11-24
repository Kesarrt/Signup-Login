const people = [
  {
    name: "Kesar",
    address: {
      city: "Nagpur",
      street: { name: "Sai Nagar", number: 123 }
    }
  },
  {
    name: "Avni",
    address: {
      city: "Ramtek",
      street: { name: "Ram Nagar", number: 456 }
    }
  }
];

const result = people.map(person => {
  const {
    name,
    address: {
      city,
      street: { name: streetName }
    }
  } = person;

  return `${name} lives in ${city} on ${streetName}`;
});

console.log(result);

