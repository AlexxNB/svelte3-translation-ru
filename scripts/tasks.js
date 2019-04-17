const sh = require('shelljs');
const path = require('path');
const nodewatch = require('node-watch');
const {check_dependency} = require('./helpers');

const root = path.resolve(path.dirname(__dirname));



const download = (target) => {
    check_dependency('git');

    const dir = '__'+target.name;
    const repo = target.repo;

    sh.rm('-rf', dir);
    sh.exec(`git clone --depth=1 --single-branch --progress https://github.com/${repo}.git ${dir}`);
}

const install = (target) => {
    const dir = '__'+target.name+target.path;

    sh.cd(dir);
    sh.exec(target.install);
}

const translate = (target) => {
    const dir = '__'+target.name;
    const repo = target.repo;
    const path = target.path;

    sh.mkdir('-p',`${dir}${path}`);
    sh.cp('-r',`repositories/${repo}${path}/*`,`${dir}${path}`);
}

const update = (target) => {
    download(target);
    translate(target);
    install(target)
}

const build = (target) => {
    const dir = '__'+target.name+target.path;
    
    sh.cd(dir);
    sh.exec(target.build);
}

const start = (target) => {
    const dir = '__'+target.name+target.path;
    
    sh.cd(dir);
    if(target.static){
        sh.exec('npx serve -l 3000 __sapper__/export');
    }else{
        sh.exec('node __sapper__/build');
    }
    
}

const watch = (target) => {
    const path = `repositories/${target.repo}${target.path}`;
    
    console.log(`\x1b[33m[Watch] Watch files started in ${path}\x1b[0m`);
    nodewatch(path, { recursive: true }, function(evt, name) {
        console.log('\x1b[33m[Watch] Changed '+name.replace(path,''),'\x1b[0m');
        translate(target);
    });
}

const dev = (target) => {
    const dir = '__'+target.name+target.path;

    watch(target);

    sh.exec(`npm run --prefix ${dir} dev`,function(code, stdout, stderr){
        console.log(stdout);
    });
}

module.exports = {
    download,
    install,
    translate,
    update,
    watch,
    dev,
    build,
    start
}