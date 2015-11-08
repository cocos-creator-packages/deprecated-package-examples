'use strict';

require('../index');

var Fs = require('fire-fs');
var Path = require('fire-path');

Editor.App.extend({
  init ( options, cb ) {
    // initialize ./.settings
    var settingsPath = Path.join(Editor.App.path, '.settings');
    Fs.ensureDirSync(settingsPath);
    Editor.registerProfilePath( 'local', settingsPath );

    // TODO: load your profile, and disable packages here

    Editor.Package.addPath([
      Editor.url('app://package-examples/'),
      Editor.url('app://benchmark/'),
      Path.join(Editor.App.home, 'packages'),
    ]);

    if ( cb ) cb ();
  },

  run () {
    // create main window
    var mainWin = new Editor.Window('main', {
      'title': 'Editor Framework',
      'width': 900,
      'height': 700,
      'min-width': 900,
      'min-height': 700,
      'show': false,
      'resizable': true,
    });
    Editor.mainWindow = mainWin;

    // restore window size and position
    mainWin.restorePositionAndSize();

    // load and show main window
    mainWin.show();

    // page-level test case
    mainWin.load( 'app://package-examples/index.html' );

    // open dev tools if needed
    if ( Editor.showDevtools ) {
      // NOTE: open dev-tools before did-finish-load will make it insert an unused <style> in page-level
      mainWin.nativeWin.webContents.once('did-finish-load', function () {
        mainWin.openDevTools({
          detach: true
        });
      });
    }
    mainWin.focus();
  },
});
