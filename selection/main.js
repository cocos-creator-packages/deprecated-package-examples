'use strict';

module.exports = {
  load () {
    Editor.Selection.register('normal');
  },

  unload () {
  },

  messages: {
    'open' () {
      Editor.Panel.open('demo-selection.1');
      Editor.Panel.open('demo-selection.2');
    },
  },
};
