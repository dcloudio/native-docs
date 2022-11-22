const pp = require('preprocess');
const path = require('path');
const fs = require('fs');
const glob = require('glob');

glob(path.resolve(__dirname, '../docs/**/*.md'), (err, files) => {
  if (err) { return console.error(err); }

  files.forEach((filePath) => {
    try {
      pp.preprocess(fs.readFileSync(filePath))
    } catch (error) {
      console.log('errorFilePath :>> ', filePath);
      throw error
    }
  })
})
