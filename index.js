'use strict'
const express = require('express')
const Slapp = require('slapp')
const ConvoStore = require('slapp-convo-beepboop')
const Context = require('slapp-context-beepboop')
const help = require('./lib/listeners/help');
const startListen = require('./lib/listeners/start');
const helpListen = require('./lib/listeners/help');

const bot = Slapp({
  convo_store: ConvoStore(),
  context: Context()
});

[
  startListen,
  helpListen
].forEach((listener) => {
  bot.message(listener.matcher, listener.type, listener.callback);
});

bot.attachToExpress(require('express')()).listen(process.env.PORT || 4000)
