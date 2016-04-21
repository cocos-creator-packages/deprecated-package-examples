'use strict';

module.exports = {
  load () {
  },

  unload () {
  },

  messages: {
    'open' () {
      Editor.Panel.open('demo-list-view');
    },

    // load list content from a local json file
    'query-list' (event) {
      delete require.cache[require.resolve('./list-infos.json')];
      // use reply to send back request results
      event.reply(null, require('./list-infos.json').list);
    }
  },
};
