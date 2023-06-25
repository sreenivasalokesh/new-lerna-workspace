const sum = (a, b) => {
  console.log("adding", a, b);
  return a + b;
};

const mul = (a, b) => {
  console.log("mult", a, b);
  return a * b;
};

module.exports = { sum, mul };
