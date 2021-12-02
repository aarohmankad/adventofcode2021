const fs = require("fs");

const move = (directions) => {
  let horizontal = 0;
  let depth = 0;
  let aim = 0;
  for (let i = 0; i < directions.length; i++) {
    let [direction, distance] = directions[i].split(" ");
    distance = parseInt(distance);
    switch (direction) {
      case "forward":
        horizontal += distance;
        depth += aim * distance;
        break;
      case "up":
        aim -= distance;
        break;
      case "down":
        aim += distance;
        break;
    }
  }
  return horizontal * depth;
};

let buffer = fs.readFileSync(__dirname + "/input");
const directions = buffer
  .toString()
  .split("\n")
  .filter((n) => n.length);

console.log(move(directions));
