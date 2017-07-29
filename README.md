# Angular Server Side Rendering + Angular CLI version 1.2.5

This simple Angular CLI Server Side Rendering project was created to be used as base for a demo app for my talk about - `Angular Server Side Rendering Hacks` @ [JSTalks Conference](http://jstalks.net/). If you are interested you can join the [event on facebook](https://www.facebook.com/events/339156366523375/) or register [here](https://www.eventbrite.com/e/jstalks-bulgaria-2017-tickets-36044567271?aff=efbevent).

## General Info:

* Build application - `gulp`

  There are two build steps. 
    1. AOT using `ng build` - generates the angular bundles used in the browser.
    2. AOT using `ngc` - generates the angular factories used on the server. This creates the module factory that is used inside `src/server.ts`

* Running application - `node_modules/.bin/ts-node ./src/server.ts` or simply `npm run serve` or `yarn serve`

  Since `ts-node` is used to run the server it's necessary to have the `src` folder present at all time. However, if we want to use `node` instead of `ts-node` it's possible to reconfigure the build process so all files are compiled to es2015 and extracted to an output folder that will contain all the necessary files.

Code separation:

    `*.browser.ts` - browser only files

    `*.server.ts` - server only files

## Debugging

* Project is configured for debugging in Visual Studio Code. Inside VSC go to the Debug section, select `Launch program` and press `start debugging` button.

## Using 'ng g' / 'ng generate'

* `-m path/to/some.module.browser.ts` must be provided if we are adding a component to a borwser module. We should manually import the component to the server module if it's needed.