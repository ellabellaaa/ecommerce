const fs = require('fs');
const path = require('path');

const logToFile = (req, res, next) => {
  const log = `${new Date().toISOString()} - ${req.method} ${req.url}\n`;
  
  fs.appendFile(path.join(__dirname, '../logs.txt'), log, (err) => {
    if (err) console.error('Logging error:', err);
  });
  
  next();
};

module.exports = logToFile;