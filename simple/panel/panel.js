'use strict';

Editor.Panel.extend({
  style: `
    h1 {
      color: #09f;
    }
  `,

  template: `
    <h1>This is a simple panel</h1>
  `,

  messages: {
    'editor:panel-run' () {
      console.log('cool!');
    }
  },

  ready () {
  },
});
