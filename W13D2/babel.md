# NPM Packages
> npm install @babel/core @babel/preset-env @babel/preset-react babel-loader
  * @babel/core is the transpiling engine itself
  * @babel/preset-env and @babel/preset-react tell the core compiler how to interpret ES6 and JSX

&nbsp;

#### Setup:

    module: {
      rules: [
        {
          test: [/\.jsx?$/], // Specifies file types to transpile
          exclude: /(node_modules)/, // Leaves dependencies alone
          loader: 'babel-loader', // Sets Babel as the transpiler
          query: {
            presets: ['@babel/env', '@babel/react'] // Tells Babel what syntaxes to translate
          }
        }
      ]
    },