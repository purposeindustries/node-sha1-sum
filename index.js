const crypto = require('crypto');
const fs = require('fs');

module.exports = function sha1sum(file) {
  const hash = crypto.createHash('sha1');
  return new Promise((resolve, reject) => {
    fs.createReadStream(file)
      .once('error', reject)
      .pipe(hash)
      .on('readable', () => {
        const data = hash.read();
        if (data) {
          resolve(data.toString('hex'));
        }
      })
      .once('error', reject);
  });
};
