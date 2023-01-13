## I [Initial setup](https://webpack.js.org/guides/getting-started/#basic-setup)

0. `open ./1/dist/index.html`
1. `Npm i`
2. `npx webpack --config 1/webpack.config.js`
3. Refresh browser
3. Remove `<script src="https://unpkg.com/lodash@4.17.20"></script>` from index html
4. Refresh browser
5. `npm install --save lodash`
6. Add `import _ from 'lodash';` to index.js
7. `npx webpack --config 1/webpack.config.js`
8. Refresh browser

## II [Loaders and typescript](https://webpack.js.org/guides/typescript/)

0. `open ./2/dist/index.html`
0. `npm install --save-dev typescript ts-loader`
1. `npm install --save-dev @types/lodash`
2. Add simple ts config, no action needed (already added)
3. Add loader to webpack config 
``` 
module: {
    rules: [
        {
           test: /\.tsx?$/,
           use: 'ts-loader',
           exclude: /node_modules/,
        },
    ],
},
resolve: {
    extensions: ['.tsx', '.ts', '.js'],
}
```
4. Rename `index.js` to `index.ts` and change lodash import to `import * as _ from 'lodash';`
5. `npx webpack --config 2/webpack.config.js`
#### Bonus, adding source maps
6. Add `console.log("hello");`
7. `npx webpack --config 2/webpack.config.js` and refresh browser
9. Add  `"sourceMap": true,` to `tsconfig.json` 
10. Add  `devtool: 'inline-source-map',` next to the entry in `webpack.config.js` 
11. `npx webpack --config 2/webpack.config.js` and refresh browser


## III [Tree shaking](https://webpack.js.org/guides/tree-shaking/)
0. `open ./3/dist/index.html`
1. Remove loadash import from `index.ts` add `import { cube } from './math';`  
2. Replace hello world message line with `element.innerHTML =  '5 cubed is equal to ' + cube(5);`
3. Add mode and optimizations  to webpack config
``` 
mode: 'development',
optimization: {
   usedExports: true,
},
 ```
4. `npx webpack --config 3/webpack.config.js` and refresh browser
5. `open ./3/dist/main.js` note that we did not import the square method from the src/math.js module. That function is what's known as "dead code", meaning an unused export and it will be dropped when running production mode.


## IV Output management, hashing https://webpack.js.org/guides/output-management/
## V Code splitting https://webpack.js.org/guides/code-splitting
## VI Lazy loading https://webpack.js.org/guides/lazy-loading/