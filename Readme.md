## I bundling with external package

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


## II loaders, typescript (tsx) https://webpack.js.org/guides/typescript/
## III step three shaking https://webpack.js.org/guides/tree-shaking/
## IV Output management, hashing https://webpack.js.org/guides/output-management/
## V Code splitting https://webpack.js.org/guides/code-splitting
## VI Lazy loading https://webpack.js.org/guides/lazy-loading/