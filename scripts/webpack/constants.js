// Core
const {resolve} = require('path');
const {path: PROJECT_ROOT} = require('app-root-path');

console.log('PROJECT_ROOT', PROJECT_ROOT);

exports.PROJECT_ROOT = PROJECT_ROOT;
exports.BUILD_DIRECTORY = resolve(__dirname, './dist');
exports.SOURCE_DIRECTORY = resolve(__dirname, './source');
