'use strict';

module.exports = {
  load () {
    Editor.Selection.register('normal');
  },

  unload () {
  },

  messages: {
    'open' () {
      Editor.Panel.open('demo-selection.panel1');
      Editor.Panel.open('demo-selection.panel2');
    },
  },
};
