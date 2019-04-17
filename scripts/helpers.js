const sh = require('shelljs');

const check_dependency = (binary) => {
    if (!sh.which(binary)) {
        error(`Sorry, this script requires ${binary}`);
    }
}

const error = (msg,exit=true) => {
    console.log("ERROR: "+msg);
    if(exit) {
        sh.exit(1);
    } 
}

const get_task = () => {
    const name = process.argv[2];

    if(name === undefined) {
        error('task is not provided!');
    }

    const task = require('./tasks');

    for(const item in task){
        if(name === item.toString()) {
            return task[item];
        }
    }

    error(`Unknown task ${name}`);
}

const get_target = () => {
    const name = process.argv[3];

    if(name === undefined) {
        error('target name is not provided!');
    }

    const targets = require('./targets');

    const result = targets.find(obj => {
        return obj.name === name;
    });

    if(result === undefined) {
        error(`Unknown target ${name}`);
    }
    
    return result;
}

module.exports = {
    check_dependency,
    get_task,
    get_target,
    error
}