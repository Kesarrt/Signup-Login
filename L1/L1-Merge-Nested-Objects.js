const profile = {
  name: "Kesar",
  age: 16,
  address: {
    city: "Ramtek",
    zipcode: "441106"
  }
};

const updates = {
  age: 30,
  address: {
    zipcode: "441106",
    country: "India"
  }
};

const mergedProfile = {
  ...profile,
  ...updates,
  address: {
    ...profile.address,
    ...updates.address
  }
};

console.log(mergedProfile);
