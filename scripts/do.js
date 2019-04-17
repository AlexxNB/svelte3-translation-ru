const sh = require('shelljs');
const { get_task,get_target } = require('./helpers');

const task = get_task();
const target = get_target();

task(target);