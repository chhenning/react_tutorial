const address = {
  street: "Hanne Nuete",
  city: "",
  country: ""
};

const { street, city, country } = address;

// with alias
const { street: st } = address;
console.log(st);
