const Helper = require('@codeceptjs/helper');
const execSync = require('child_process').execSync;
const utf8 = { encoding: 'utf-8' };
let state = {}

class SetupBlocks extends Helper {

  _init() {
    // only for docker.
    execSync('rm -rf output/*', utf8);
    execSync('rm -rf allure-results/*', utf8);
  }

  _before(test) {
    state = {};
  }
  
  _finishTest() {
    // only for docker.
    execSync('allure serve output', utf8);
  }
}

module.exports = SetupBlocks;
