const fs = require("fs");

const powerConsumption = (numbers) => {
  const length = numbers[0].length;
  let gamma = Array(length).fill(0);
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < length; j++) {
      if (numbers[i][j] === "0") {
        gamma[j]--;
      } else {
        gamma[j]++;
      }
    }
  }
  gamma = gamma.map((x) => (x >= 0 ? 1 : 0));
  let epsilon = gamma.map((x) => (x === 1 ? 0 : 1));

  return [gamma, epsilon];
};

const lifeSupport = (numbers) => {
  let oxygen = [...numbers];
  let co2 = [...numbers];

  let [gamma, epsilon] = powerConsumption(oxygen);
  for (let i = 0; i < gamma.length; i++) {
    let numbersFiltered = [];
    for (let j = 0; j < oxygen.length; j++) {
      if (oxygen[j][i] == gamma[i]) {
        numbersFiltered.push(oxygen[j]);
      }
    }
    oxygen = numbersFiltered;
    if (oxygen.length === 1) {
      break;
    }
    [gamma, epsilon] = powerConsumption(oxygen);
  }

  [gamma, epsilon] = powerConsumption(co2);
  for (let i = 0; i < epsilon.length; i++) {
    let numbersFiltered = [];
    for (let j = 0; j < co2.length; j++) {
      if (co2[j][i] == epsilon[i]) {
        numbersFiltered.push(co2[j]);
      }
    }
    co2 = numbersFiltered;
    if (co2.length === 1) {
      break;
    }
    [gamma, epsilon] = powerConsumption(co2);
  }

  return parseInt(oxygen, 2) * parseInt(co2, 2);
};

let buffer = fs.readFileSync(__dirname + "/input");
const numbers = buffer
  .toString()
  .split("\n")
  .filter((n) => n.length);

console.log(lifeSupport(numbers));
