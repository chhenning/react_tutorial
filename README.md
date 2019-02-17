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

# Javascript

## Let vs Var vs Const

```
function sayHello()
{
    for(var i = 0; i < 5; i++)
    {
        console.log(i)
    }

    // i is still accessible outside the for loop
    console(i)
}
```

- `var` is accessible from inside the function (scoped to the function)
- `let` is scoped in a block
- `const` for constants and are also block scoped

## Objects

```
// Old
const person =
    {
        name: "Mosh",
        walk: function() {},
        talk: function() {}
    };

// New
const person =
    {
        name: "Mosh",
        walk() {},
        talk() {}
    };

person.name = "Christian";
person.walk();
```

## The this Keyword

```
const person =
    {
        name: "Mosh",
        walk() {
            console.log(this);
        },
        talk() {}
    };

person.walk();

// will fail -- this will be global Window object
const walk_f = person.walk;
walk_f() // will print undefined - because of strict mode
```

## Binding _this_

```
const w = person.walk.bind(person);
w() // now it works
```
