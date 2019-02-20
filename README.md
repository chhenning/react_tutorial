# Setting Up Dev Env

1. install node.js

2. `npm i -g create-react-app`

   https://github.com/facebook/create-react-app

   https://stackoverflow.com/questions/52823393/react-scripts-is-not-recognized-as-an-internal-or-external-command

3) Add some Visual Studio Code extensions

   - simple react snippets
   - prettier

4) Enable Format on Save in user settings

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

## Arrow Functions

```
// Old
const square = function(number)
{
    return number * number;
}

// New
const square_new = (number) => number * number
```

Use full example

```
const jobs = [
  { id: 1, isActive: true},
  { id: 2, isActive: true},
  { id: 3, isActive: false},
]

const a = jobs.filter( job => job.isActive );
console.log(a)
```

## Arrow Functions and this

```
// Old
const person = {
  name: "Christian",
  talk() {
    var self = this;
    setTimeout(function() {
      console.log("this", self);
    }, 1000);
  }
};

person.talk();
```

```
// New
const person = {
  name: "Christian",
  talk() {
    // Arrow functions don't rebind this keyword. It's inherited from the calling block.
    setTimeout(() => console.log("this", this), 1000);
  }
};

person.talk();
```

## Array map Method

```
const colors = ["red", "green", "blue"];
const items = colors.map(c => "<li>" + c + "</li>");
console.log(items);

// template literal
const items_better = colors.map(c => `<li>${c}</li>`);
console.log(items_better);
```

## Object Destructuring

```
const address = {
  street: "Hanne Nuete",
  city: "",
  country: ""
};

const { street, city, country } = address;

// with alias
const { street: st } = address;
console.log(st);
```

## Spread Operator

```
let first = [1, 2, 3];
const second = [4, 5, 6];

// old
//const combined = first.concat(second);

// combining two arrays:
// new using Spread Operator ...
const combined = [...first, "a", "Hello", ...second];
first += "New";

console.log(combined);
console.log(first);

// combining two objects
const a = { Name: "Christian" };
const b = { Job: "SW Eng" };
const c = { ...a, ...b, Location: "NYC" };
console.log(c);

// cloning a
const clone = { ...a };
```

## Classes and Inheritance

```
class Person {
  constructor(name) {
    this.name = name;
  }

  walk() {
    console.log("walk");
  }
}

class Teacher extends Person {
  constructor(name, degree) {
    super(name);
    this.degree = degree;
  }

  teach() {
    console.log("teach");
  }
}

const p = new Person("Christian");
console.log(p);

const t = new Teacher("Sophie", "Master");
console.log(t);
t.walk();
t.teach();
```

## Modules

Each file can be a module.

Classes defined in a file are private by default.

```
// Person.js

export class Person {
  constructor(name) {
    this.name = name;
  }

  walk() {
    console.log("walk");
  }
}

```

```
// Teacher.js

import { Person } from "./Person";

export class Teacher extends Person {
  constructor(name, degree) {
    super(name);
    this.degree = degree;
  }

  teach() {
    console.log("teach");
  }
}
```

```
// index.js
import { Person } from "./Person";
import { Teacher } from "./Teacher";

const p = new Person("Christian");
console.log(p);

const t = new Teacher("Sophie", "Master");
console.log(t);
t.walk();
t.teach();
```

## Default And Named Exports

Default via `import ... from File`
Named via `import { ... } from File`

For example `import React, { Component } from 'react'`

`react` is a module from 3rd party.

`React` is default export

`Component` is named export. Ctrl+Space to get a list.
