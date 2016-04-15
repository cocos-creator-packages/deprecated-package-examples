'use strict';

module.exports = {
  load () {
  },

  unload () {
  },

  messages: {
    'open' () {
      Editor.Panel.open('demo-run-command');
    },

    'run' (opts) {
      // node.js child_process module
      // you can use exec or spawn to run command
      const Exec = require('child_process').exec;
      let child = Exec(opts.cmd, {cwd: opts.cwd}, () => {
        Editor.success('Run command finished!');
      });
      // whenever child process' stdout receive data, use IPC message to
      // send the message to panel
      child.stdout.on('data', (data) => {
        Editor.sendToPanel('demo-run-command', 'demo-run-command:log', data.toString());
      });
    }
  },
};
