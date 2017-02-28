# TypeScript 2 + Express + Node.js + Angular 2

This is a repository for combining ts with express and angular, with the minimun help from Grunt, we could install all dependencies (both front/back end into node_modules, then use `grunt copy` to migrate required frontend modules to public folder)

## Install

This is a quick angular2 + express + typescript + bootstrap (admin template)
project.

To get started, just run:

```
npm install
```

Which will install all your dependencies in the *node_modules* folder.


## Get started

Once you have npm dependencies ready, you can then run:

```
npm start
```

Which will go through several process:

    - do `npm run grunt ts` to compile all server side ts files
    - do build to get all client side files ready
    - do `npm run grunt copy:modbuild` to copy all dependencies of client side 
    node modules to the *dist/public* folder
    - run the entry from *bin/www*
