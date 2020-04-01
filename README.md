# volto-cookie-banner

Volto cookie banner integration addon.

To be used with: [collective.volto.cookieconsent](https://github.com/collective/collective.volto.cookieconsent)

To be used with mrs-developer, see [Volto docs](https://docs.voltocms.com/customizing/add-ons/) for further usage informations.

## Install mrs-developer and configure your Volto project

In your Volto project:

```bash
yarn add mrs-developer collective/volto-cookie-banner
```

and in `package.json`:

```json
  "scripts": {
    "develop:npx": "npx -p mrs-developer missdev --config=jsconfig.json --output=addons",
    "develop": "missdev --config=jsconfig.json --output=addons",
    "preinstall": "if [ -f $(pwd)/node_modules/.bin/missdev ]; then yarn develop; else yarn develop:npx; fi",
    "postinstall": "rm -rf ./node_modules/volto-* && yarn omelette",
    ...
  }
```

Create a `mrs.developer.json` file:

```json
{
  "volto-cookie-banner": {
    "url": "git@github.com:collective/volto-cookie-banner.git"
  }
}
```

In `jsconfig.json`:

```json
{
  "compilerOptions": {
    "paths": {
      "volto-cookie-banner": ["addons/volto-cookie-banner"]
    },
    "baseUrl": "src"
  }
}
```

Fix tests, in `package.json`:

```json
"jest": {
    ...
    "moduleNameMapper": {
      "@plone/volto/(.*)$": "<rootDir>/node_modules/@plone/volto/src/$1",
      "@package/(.*)$": "<rootDir>/src/$1",
      "volto-cookie-banner/(.*)$": "<rootDir>/src/addons/volto-cookie-banner/src/$1",
      "~/(.*)$": "<rootDir>/src/$1"
    },
    "testMatch": [
      "**/__tests__/**/*.[jt]s?(x)",
      "**/?(*.)+(spec|test).[jt]s?(x)",
      "!**/src/addons/volto/**/*"
    ],
    ...
```

Edit `.eslintrc`:

```json
{
  "extends": "./node_modules/@plone/volto/.eslintrc",
  "settings": {
    "import/resolver": {
      "alias": {
        "map": [
          ["@plone/volto", "@plone/volto/src"],
          ["@package", "./src"],
          ["volto-cookie-banner", "./src/addons/volto-cookie-banner/src"]
        ],
        "extensions": [".js", ".jsx", ".json"]
      },
      "babel-plugin-root-import": {
        "rootPathSuffix": "src"
      }
    }
  }
}
```

Add `src/addons` in `.gitignore`:

```
# .gitignore
src/addons
```

Then, run `mrs-developer` and install dependencies:

```bash
yarn develop
yarn
```

## Usage

In your Volto project, add the reducer:

```jsx
// src/reducers/index.js

/**
 * Root reducer.
 * @module reducers/root
 */

import defaultReducers from '@plone/volto/reducers'
import { cookieConsentReducer } from 'volto-cookie-banner'

/**
 * Root reducer.
 * @function
 * @param {Object} state Current state.
 * @param {Object} action Action to be handled.
 * @returns {Object} New state.
 */
const reducers = {
  ...defaultReducers,
  // Add your reducers here
  cookieConsentInfos: cookieConsentReducer,
}

export default reducers
```

And wherever you want to add the component, import and use it like this:

```jsx
import { CookieBanner } from 'volto-cookie-banner'

const YourAppComponent = () => <CookieBanner />
```
