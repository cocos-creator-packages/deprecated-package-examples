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
    'query-list' (event, reply) {
      delete require.cache[require.resolve('./list-infos.json')];
      // use reply to send back request results
      reply(require('./list-infos.json').list);
    }
  },
};
