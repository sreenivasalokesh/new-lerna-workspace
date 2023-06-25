const sum = (a, b) => {
  console.log("adding result", a, b);
  return a + b;
};

const mul = (a, b) => {
  console.log("multiply result", a, b);
  return a * b;
};

const div = (a, b) => {
  console.log("divide result", a, b);
  return a / b;
};

module.exports = { sum, mul, div };
