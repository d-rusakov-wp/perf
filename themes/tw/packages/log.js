const reset = "\x1b[0m";

module.exports = {
  green: text => {
    console.log(`\x1b[32m ${text} ${reset}`);
  },
  red: text => {
    console.log(`\x1b[31m ${text} ${reset}`);
  },
};
