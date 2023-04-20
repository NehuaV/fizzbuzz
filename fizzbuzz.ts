function FizzBuzz1() {
  for (let i = 1; i < 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

function FizzBuzz2() {
  for (let i = 1; i < 100; i++) {
    let output = "";
    if (i % 3 === 0) output += "Fizz";
    if (i % 5 === 0) output += "Buzz";

    if (!output) {
      console.log(i);
      continue;
    }
    console.log(output);
  }
}

const coditions = [
  { condition: 3, output: "Fizz" },
  { condition: 5, output: "Buzz" },
  { condition: 7, output: "Bop" },
];

function FizzBuzz3() {
  for (let i = 1; i < 100; i++) {
    let result = "";

    for (let obj of coditions) {
      if (i % obj.condition === 0) result += obj.output;
    }

    result ? console.log(result) : console.log(i);
  }
}

const map = new Map([
  [3, "Fizz"],
  [5, "Buzz"],
  [7, "Bop"],
]);

// Desctructing
function FizzBuzz4() {
  for (let i = 1; i < 100; i++) {
    let result = "";

    for (let [k, o] of map) {
      if (i % k === 0) result += o;
    }

    result ? console.log(result) : console.log(i);
  }
}

// Bit faster
function FizzBuzz5() {
  for (let i = 1; i < 100; i++) {
    let result = "";

    for (let obj of map) {
      if (i % obj[0] === 0) result += obj[1];
    }

    result ? console.log(result) : console.log(i);
  }
}
async function main() {
  FizzBuzz5();
}

main();
