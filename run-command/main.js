module.exports = {
    load: function () {
    },

    unload: function () {
    },

    'demo-run-command:open': function () {
        Editor.Panel.open('demo-run-command.panel');
    },

    'demo-run-command:run': function (opts) {
        // node.js child_process module
        // you can use exec or spawn to run command
        var exec = require('child_process').exec;
        var child = exec(opts.cmd, {cwd: opts.cwd}, function(err) {
            Editor.success('Run command finished!');
        });
        // whenever child process' stdout receive data, use IPC message to
        // send the message to panel 
        child.stdout.on('data', function(data) {
            Editor.sendToPanel('demo-run-command.panel', 'demo-run-command:log', data.toString());
        });
    }
};
