const functions = require('./functions');

const main = async () => {
 await functions.create(1, 'hello world');
 await functions.concatFiles();

};

main();
