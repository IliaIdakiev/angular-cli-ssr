# Angular Server Side Rendering + Angular CLI version 1.2.5

* Build application - `gulp`
* Run application - `node_modules/.bin/ts-node ./src/server.ts`

## Debugging

* Project is setup for debugging in Visual Studio Code. Just go to the debug section and press launch program to build the project and start the server for debugging trough VSC.

## Using 'ng g' / 'ng generate'

* `-m path/to/some.module.browser.ts` must be provided if we are adding a component to a borwser module. We should manually import the component to the server module if it's needed.