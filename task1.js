const path = require('path');
const os = require('os');
const process = require('process');

// Print out the current working directory
console.log('Current Working Directory:', process.cwd());


// Print out the separator of a given file path
console.log('Path Separator:', path.sep);

// Example file path
const filePath = './task1.txt';

// Print out the extension name of a file path
console.log('File Extension:', path.extname(filePath));

// Print out the process id of the current running process
console.log('Process ID:', process.pid);

// Print out the user information of the os
const userInfo = os.userInfo();
console.log('User Information:', userInfo);

// Print out the platform of an operating system
console.log('Operating System Platform:', os.platform());
