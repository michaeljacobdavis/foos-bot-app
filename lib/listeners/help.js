const startListen = require('./start');

exports.key = 'help';
exports.type = ['direct_mention'];
exports.matcher = /^help$/i;
exports.callback = function (message) {
  message.say([
    startListen.description
  ].join('\n'));
};
