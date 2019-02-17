# Setting Up Dev Env

1. install node.js

2. `npm i -g create-react-app`

   https://github.com/facebook/create-react-app

3. Add some Visual Studio Code extensions

   - simple react snippets
   - prettier

4. Enable Format on Save in user settings

# Create first app

On command line `create-react-app react-app`

This command installs:

- Development Server
- Webpack
- Babel (compiler)

??? `npm run eject`

# Start App

```
cd react-app
npm start
```

# React

Components are written in [jsx](https://reactjs.org/docs/introducing-jsx.html).

Babel will compile jsx into javascript. Try out on `https://babeljs.io/repl`

```
const e = <h1>Hello World</h1>
```

convereted into

```
"use strict";

var e = React.createElement("h1", null, "Hello World");
```

## Hello World App

1. Delete all files in `src/`.
2. Add index.js

The page will automatically reload via **Hot Module Browsing**.
