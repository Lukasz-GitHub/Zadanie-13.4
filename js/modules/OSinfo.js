var os = require('os');
var timeConvert = require('./timeConventer.js') // importuję moduł z funkcją timeConvert();

function getOSinfo() {
    var type = os.type();
    if (type === 'Darwin') {
        type = 'osx';
    } else if (type === 'Windows_NT') {
        type = 'Windows';
    }
    var release = os.release();
    var cpu = os.cpus()[0].model;
    var uptime = os.uptime();
    var userInfo = os.userInfo();
    console.log('System: ', type);
    console.log('Realase: ', release);
    console.log('CPU model: ', cpu);
    console.log('Uptime: ~', timeConvert.print(uptime)); // wywołuje funkcję z argumentem uptime który zawiera czas pracy systemu
    console.log('User name: ', userInfo.username);
    console.log('Home dir: ', userInfo.homedir, '\n');
}
exports.print = getOSinfo;