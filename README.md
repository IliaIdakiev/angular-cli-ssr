# Angular Server Side Rendering + Angular CLI version 1.2.5

General Info:

* Build application - `gulp`

  We have two build steps. 
    1. AOT using `ng build` that will generate the angular bundles that are used in the browser.
    2. Using `ngc` we build angular AOT so it can be used on the server. This creates the module factory that is used inside `src/server.ts`

* Running application - `node_modules/.bin/ts-node ./src/server.ts` or simply `npm run serve` or `yarn serve`

  Since `ts-node` is used to run the server it's necessary to have the `src` folder present at all time. However, if we want to use `node` instead of `ts-node` it's possible to reconfigure the build process so all files are compiled to es2015 and extracted to an output folder that will contain all the necessary files.

Code separation:

    `*.browser.ts` - browser only files

    `*.server.ts` - server only files

## Debugging

* Project is configured for debugging in Visual Studio Code. Inside VSC go to the Debug section, select `Launch program` and press `start debugging` button.

## Using 'ng g' / 'ng generate'

* `-m path/to/some.module.browser.ts` must be provided if we are adding a component to a borwser module. We should manually import the component to the server module if it's needed.