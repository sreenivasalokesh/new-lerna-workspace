const sum = (a, b) => {
  console.log("adding", a, b);
  return a + b;
};

const mul = (a, b) => {
  console.log("multiply result", a, b);
  return a * b;
};

module.exports = { sum, mul };
