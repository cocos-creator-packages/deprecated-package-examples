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

  listeners: {
    click ( event ) {
      event.stopPropagation();
      console.log('click!');
    },

    'panel-resize' ( event ) {
      console.log(event.target);
    },
  },

  ready () {
  },

  run (argv) {
    console.log(`panel run: ${argv}`);
  },
});
