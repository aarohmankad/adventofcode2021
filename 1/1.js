const fs = require('fs');

const getIncreased = (depths) => {
    let increasedCounts = 0;
    for (let i = 3; i < depths.length; i++) {
        const current = depths[i] + depths[i - 1] + depths[i - 2];
        const previous = depths[i - 1] + depths[i - 2] + depths[i - 3];
        increasedCounts += current > previous;
    }
    return increasedCounts;
}

let buffer = fs.readFileSync(__dirname + '/input');
const numbers = buffer
  .toString()
  .split('\n')
  .filter(n => n.length)
  .map(n => parseInt(n));

console.log(getIncreased(numbers));
