# Package Examples

A set of package examples help developer get started with Fireball package creating.

Related repos:

- [Fireball Editor](https://github.com/fireball-x/fireball)
- [Editor Framework](https://github.com/fireball-x/editor-framework)

## Package Basics

You should read the following docs to learn how to create package for Fireball:

- [Create Package](https://github.com/fireball-x/editor-framework/blob/master/docs/manual/create-your-package.md)
- [Register Panel](https://github.com/fireball-x/editor-framework/blob/master/docs/manual/register-panels.md)
- [IPC Channel]

## Preview Example

To see these examples in action, first you need to launch Package Studio:

```bash
# In Fireball repo folder
gulp package-studio
```

Then click `Examples` in main menu, you'll see a list of examples. Click each one to open the example panel and see how it works.

## Example List

- [Simple](/simple) The bare bone package without any functionality. Can be used as a template to create new packages.
- [List View](/list-view) A list view that loads data from local file and populate the list with item template.
- [Run Command](/run-command) A command runner receive command input from panel and run command on core-level, then send the stdout data back to panel for logging.
- [Confirm Close](/confirm-close) When close a package panel, opens a native dialog and respond to user action. See [Electron's dialog docs](https://github.com/atom/electron/blob/master/docs/api/dialog.md) for details.
- [Grid](/grid) A scalable/pan-able grid system, using [pixi-grid widget from builtin packages](https://github.com/fireball-packages/pixi-grid).
- [Life Cycle](/lifecycle) Demonstrate how custom element life cycle works by logging at key life cycle callback functions.
- [Selection](/selection) Demonstrate mouse drag selection and multi selection in a list.
- [Shortcuts](/shortcuts) Demonstrate keyboard shortcuts event trigger and bubbling. Shortcuts are defined in `package.json`.
