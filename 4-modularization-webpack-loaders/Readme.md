# Lesson: Webpack Loaders
## Transpiling ES6 to ES5
1. Create webpack config and define entry file and bundle path
1. Install babel-loader, @babel/preset-env, @babel/core as dev dependency // npm install -D babel-loader @babel/preset-env @babel/core
1. Add babel-loader to webpack config
1. Adjust npm script "build" // remove entry, as it's now defined in webpack.config
1. Generate bundle with webpack
1. Confirm that bundle is ES5 code

## Import Bootstrap CSS
1. Import css files (style.css & bootstrap) into app.js
1. Add style / css / file loaders (google it!) // inject css into dom, load css into js, handle fonts (now done by default)
1. Configure that css files are handled

Hint: Webpack also needs a "file-loader" to properly load fonts. // not anymore

## Use dist folder
1. Configure dist folder output
1. Add html-webpack-plugin
1. Configure html webpack plugin to create html file in dist folder using a template // start web server in dist folder

## Documentation
[https://github.com/babel/babel-loader](https://github.com/babel/babel-loader)
