# Angular (Universal) Server Side Rendering + Angular CLI version 1.6.4

This simple Angular CLI Server Side Rendering project was created with Angular CLI 1.2.5 to be used as base for a demo app for my talk about - `Angular Server Side Rendering Hacks` @ [JSTalks Conference](http://jstalks.net/). It was recently updated to Angular 5.1.0 and Angular CLI 1.6.4

## General Info:

* Install dependencies - `yarn` or `npm i`

* Building the app:
  
    * build for node - `gulp`

    * Running application with node - `node ./out-server/server.js` or simply `npm run ssr-serve` or `yarn ssr-serve` -> [http://localhost:8080/](http://localhost:8080/)

    All server files are compiled to es2015 and extracted to the `out-server` folder. All browser files are inside the `dist` folder.


Code separation:

    `*.browser.ts` - browser only files

    `*.server.ts` - server only files

## Debugging

* Project is configured for debugging in Visual Studio Code. Inside VSC go to the Debug section, select `Build & Launch` to build and start the application or `Launch` to start without re-building.

* Brakepoints insede angular code will become active when `renderModuleFactory` inside `./src/server.ts` is called.

## Using 'ng g' / 'ng generate'

* `-m path/to/some.module.browser.ts` must be provided if we are adding a component to a browser module. We should manually import the component to the server module if it's needed.
