const fs = require('fs').promises;

const create = async (n, text) => {
  await fs.writeFile(`./files/file${n}.txt`, text);
};

const read = async (n) => {
  const data = await fs.readFile(`./files/file${n}.txt`);
  return data.toString();
};

const getRandNumber = async () => {
  return Math.floor(Math.random() * 5) + 1;
};

const concatFiles = async () => {
  const randomNum = await getRandNumber();
  const fileNames = await fs.readdir('./files');
  const relevantFileNames = fileNames.filter((fileName) =>
    fileName.match(`file${randomNum}`)
  );

  let contents = '';

  for (const fileName of relevantFileNames) {
    const data = await fs.readFile(`./files/${fileName}`);
    contents += data.toString();
  }

  await fs.writeFile('./files/stringtxt.txt', contents);
  await fs.rename('./files/stringtxt.txt', './files/concatTextFile.txt');
};

module.exports = { create, read, getRandNumber, concatFiles };
