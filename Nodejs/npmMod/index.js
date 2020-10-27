const chalk = require("chalk");
const { default: validator } = require("validator");
console.log(chalk.red.underline.inverse("Hello World"));

const res = validator.isEmail("pravin@abc.com");
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));
