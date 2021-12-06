const dotenv = require('dotenv');
const { createLogger, transports, format } = require('winston');

dotenv.config({ path: './config.env' });

const logger = createLogger({
  transports: [
    new transports.File({
      filename: 'info.log',
      level: 'debug',
      format: format.combine(format.timestamp(), format.json())
    })
  ]
});

module.exports = logger;
