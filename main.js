const { sum, substraction, multiplication } = require("./utils/tools");

const Maze = require('./classes/Maze');

const my_maze = new Maze(4, 4);

console.log(my_maze);

my_maze.generate();

const players = require("./data/players");

console.log(players);

console.log(sum(2, 2));