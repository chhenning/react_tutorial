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

# React Part 1

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

# Bootstrap

`npm i booststrap`
`npm i booststrap@4.1.1`

```
// in index.js
import 'bootstrap/dist/css/bootstrap.css'
```

# React Part 2

the VSC extension simpleReactSnippets allows for some handy shortcuts

`imrc` + tab
`cc` + tab

`return <h1>Hello World!</h1>;` is a jsx expression which will be made into `React.createElement()`

## Embedding Expressions

```
// Alternative to <div>. There will be no <> in the final html.
<React.Fragment>
  <h1>Hello World!</h1>
  <button>Increment</button>
</React.Fragment>
```

In each component class `state` is a special object for storing the state, aka data.

## Setting Attributes

`className` instead of `class`.

### Styles

```
// Add a styles object to class, just like state

// Must be camel notation!
  styles = {
    fontSize: 20,
    fontWeight: "bold"
  };

...
    <span style={this.styles} className="badge badge-primary m-2">
      {this.formatCount()}
    </span>
...
```

Inline Styles

```
    <span style={ { fontSize: 20 } } className="badge badge-primary m-2">
      {this.formatCount()}
    </span>
```

## Rendering List

```
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"]
  };

// in render()

  <ul>
    {this.state.tags.map(t => (
      <li>{t}</li>
    ))}
  </ul>
```

Each list item needs an ID, in this case the tag name is unique and so we can use it as the ID.

```
  <ul>
    {this.state.tags.map(t => (
      <li key={t}>{t}</li>
    ))}
  </ul>
```

## Handling Events

Pass an reference to a member function.

```
handleIncrement() {
  console.log("Button pressed.");
}

// in render()
<button
  onClick={this.handleIncrement}
  className="btn btn-secondary btn-sm"
>
  Increment
</button>
```

In handleIncrement() `this` is undefined!

To bind `this` with handleIncrement() we need to add a line of code in the constructor:

```
constructor() {
  super()

  this.handleIncrement = this.handleIncrement.bind(this);
}
```

Another solution is to make handleIncrement an arrow function. No binding is needed, because arrow functions inherit the this keyword.

```
handleIncrement = () => {

  // !!! A state cannot be change like this!!!!
  this.state.count += 1;

  console.log("Button pressed.", this.state.count);
};
```

## Updating the state

Using react's Component::setState(). setState() will issue a render() at some point in the future.

```
handleIncrement = () => {
  this.setState({ count: this.state.count + 1 });
};
```

## Passing an argument into handler function

Using arrow function:

```
onClick={() => this.handleIncrement(1)}
```
