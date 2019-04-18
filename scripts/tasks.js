const sh = require('shelljs');
const path = require('path');
const fs = require('fs');
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

const translate_copy = (target) => {
    const dir = '__'+target.name;
    const repo = target.repo;
    const path = target.path;

    sh.mkdir('-p',`${dir}${path}`);
    sh.cp('-r',`repositories/${repo}${path}/*`,`${dir}${path}`);
}


const translate_replace = (target) => {
    const dir = `__${target.name}${target.path}`;
    const u_dir = `__${target.name}/__unchanged`;
    const transfile = `repositories/${target.repo}/translation.json`;
    
    if(!fs.existsSync(transfile)) return false;

    const data = fs.readFileSync(transfile,'utf8');

    if (!data) return false;

    const list = JSON.parse(data);
    
    list.files.forEach(item => {
        const file = `${dir}/${item.file}`;
        const u_file = `${u_dir}/${item.file}`;
        const u_path = path.resolve(path.dirname(u_file));

        if(!fs.existsSync(u_file)) {
            sh.mkdir('-p',u_path);
            sh.cp(file,u_file);
        }

        const content = fs.readFileSync(u_file,'utf8');
        if (!content) return true;

        const translated = item.strings.reduce(function(content, str) {
            return content.replace(new RegExp(str.o, 'g'),str.t);
        }, content);

        fs.writeFileSync(file, translated);
    });
}

const update = (target) => {
    download(target);
    translate_copy(target);
    translate_replace(target);
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
    const path = `repositories/${target.repo}`;
    
    console.log(`\x1b[33m[Watch] Watch files started in ${path}\x1b[0m`);
    nodewatch(path, { recursive: true }, function(evt, name) {
        console.log('\x1b[33m[Watch] Changed '+name.replace(path,''),'\x1b[0m');
        if(name.endsWith('/translation.json')){
            translate_replace(target);
        }else{
            translate_copy(target);
        }
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
    update,
    watch,
    dev,
    build,
    start
}