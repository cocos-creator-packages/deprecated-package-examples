module.exports = {
    load: function () {
    },

    unload: function () {
    },

    'demo-list-view:open': function () {
        Editor.Panel.open('demo-list-view.panel');
    },

    // load list content from a local json file
    'demo-list-view:query-list': function (reply) {
        delete require.cache[require.resolve('./list-infos.json')];
        // use reply to send back request results
        reply(require('./list-infos.json').list);
    }
};
