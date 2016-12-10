exports.key = 'start';
exports.type = ['direct_mention'];
exports.description = '`start` - start a game';
exports.matcher = /^\start$/i;
exports.callback = function (message) {
  message.say({
    text: '',
    attachments: [
      {
        text: '<!here> Game Started! Who\'s in?',
        callback_id: 'join_callback',
        actions: [
          { name: 'answer', text: 'I\'m in!', type: 'button', value: 'in' },
          { name: 'answer', text: 'No thanks', type: 'button', value: 'out' }
        ]
      }
    ]
  });
};
