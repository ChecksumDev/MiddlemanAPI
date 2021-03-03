const chalk = require('chalk');
const fs = require('fs');

/**
 * 
 * @param {*} data 
 * Text to output to latest.log.
 */
function logFile(data) {
    fs.appendFileSync(`latest.log`, `\n${data}`)
}

/**
 * 
 * @param {*} data 
 * Text to output to console.
 */
function debug(data) {
    if (!data) process.exit(1);
    logFile(data);
    console.log(chalk.magenta(`[DEBUG]: ${data}`))
}

/**
 * 
 * @param {*} data 
 * Text to output to console.
 */
function log(data) {
    if (!data) process.exit(1);
    logFile(data);
    console.log(chalk.greenBright(`[INFO]: ${data}`))
}

/**
 * 
 * @param {*} data 
 * Text to output to console.
 */
function warn(data) {
    if (!data) process.exit(1);
    logFile(data);
    console.log(chalk.yellowBright(`[WARN]: ${data}`))
}

/**
 * 
 * @param {*} data 
 * Text to output to console.
 */
function error(data) {
    if (!data) process.exit(1);
    logFile(data);
    console.log(chalk.redBright(`[ERROR]: ${data}`))
}

module.exports = {
    debug,
    log,
    warn,
    error
};