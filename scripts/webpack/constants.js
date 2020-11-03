// Core
const {resolve} = require('path');
const {path: PROJECT_ROOT} = require('app-root-path');

console.log('PROJECT_ROOT', PROJECT_ROOT);

// export const pathsToClean = ['dist'];
exports.BUILD_DIRECTORY = resolve(__dirname, '../../dist');
exports.PROJECT_ROOT = PROJECT_ROOT;