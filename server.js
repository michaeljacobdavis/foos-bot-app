'use strict'
const express = require('express')
const Slapp = require('slapp')
const ConvoStore = require('slapp-convo-beepboop')
const Context = require('slapp-context-beepboop')

const slapp = Slapp({
  convo_store: ConvoStore(),
  context: Context()
});

slapp.message('^(hi|hello|hey).*', ['direct_mention', 'direct_message'], (msg, text, greeting) => {
  msg
    .say(`${greeting}, how are you?`)
    .route('handleHowAreYou')  // where to route the next msg in the conversation
})

slapp.route('handleHowAreYou', (msg) => {
  msg.say(['Me too', 'Noted', 'That is interesting'])
})

slapp.attachToExpress(require('express')()).listen(process.env.PORT || 4000)
