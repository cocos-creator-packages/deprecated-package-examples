'use strict';

module.exports = {
  load () {
  },

  unload () {
  },

  messages: {
    'open' () {
      Editor.Panel.open('demo-confirm-close');
    },

    'open-pure-window' () {
      let editorWin = new Editor.Window('foobar', {
        width: 800,
        height: 600,
      });
      editorWin.load('http://www.baidu.com');
      editorWin.nativeWin.once('close', event => {
        if ( Editor.isClosing ) {
          return;
        }

        event.preventDefault();
        Editor.log('prevent close manually');

        let res = Editor.Dialog.messageBox({
          type: 'info',
          buttons: ['Yes', 'No'],
          title: 'Show the window?',
          message: 'Would you like to show the window next time?',
          detail: 'Would you like to show the window next time?',
        });

        if ( res === 0 ) {
          Editor.log('Yes, I would like!');
        } else if ( res === 1 ) {
          Editor.log('No, don\'t bother me again!');
        }

        editorWin.close();
      });
    },
  }
};
