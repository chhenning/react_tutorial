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
`sfc` + tab

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

`setState` can only be used of the constructor is done and the component is part of the DOM!!

### Deleting an element from an array

```
handleDelete = movie => {
  // make a copy of the movies array excluding the one to be deleted
  const movies = this.state.movies.filter(m => m._id !== movie._id);

  // update the state of the component by overriding the current movie array.
  this.setState({ movies: movies });

  // OR a little shorter
  this.setState({ movies });
};
```

## Passing an argument into handler function

Using arrow function:

```
onClick={() => this.handleIncrement(1)}
```

## Passing data into a component

Every React component has a `props` object.

```
// creating a Component
{this.state.counters.map(c => (
  <Counter key={c.id} value={c.value} selected={true} />
))}
```

The Counter's `props` object will have the data stored.

```
state = {
  value: this.props.value
};
```

### Passing Children into a component

Passing an h4 as children into Counter component.

```
<Counter key={c.id} value={c.value} selected={true}>
  <h4>Counter #{c.id}</h4>
</Counter>
```

There will be a new property `children` in the `props`.

The children in this case is just an react element which can be rendered in the component like this:

```
render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
```

## Props vs State

`State` is local and private to a component.

`Props` is used to pass data into a component. It is also read only.

## Raising Events

Pass a callback into a component:

```
  \\ create new components
  {this.state.counters.map(c => (
    <Counter key={c.id} onDelete={this.handleDelete} counter={c} />
  ))}

  \\ member function
  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters: counters });
  };
```

Call the callback in component:

```
  <button
    onClick={() => this.props.onDelete(id)}
    className="btn btn-danger btn-sm m-2"
  >
    Delete
  </button>
```

## Single Source Of Truth

Setting a component's state correctly.

Not the right way since we are make a copy of the value. This way we don't see updates to the value from the parent component.

```
  state = {
    value: this.props.counter.value
  };
```

A controlled component doesn't have a state. It only uses the readonly `props` to receive data and raises events in case the data changes.

## Stateless Functional Component

Instead of creating a stateless class a function can also be used. Use `sfc` + tab to create the skeleton.

```
const NavBar = props => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {props.totalCounters}
        </span>
      </a>
    </nav>
  );
};
```

# Lifecycle Hooks

Interact with the lifecycle of a component. Starting, redrawing, destroying, etc.

## Mount

Following functions are called in order:

### `constructor`

Set state from props

```
// setting the state
constructor(props) {
  super(props);

  this.state = this.props.something;

  // DONT use setState
}
```

### `render`

### `componentDidMount`

Component is rendered and part of the DOM. Perfect place to use AJAX to get data from server.

```
componentDidMount() {
  // AJAX call

  this.setState({ something });
}
```

## Update

Component's `state` or `props` changes.

### `render`

### `componentDidUpdate`

```
componentDidUpdate(prevProps, prevState) {
  if(prevProps.counter.value !== props.counter.value) {
    // Do something like an AJAX call
  }
}
```

## Unmount

Component will be removed from the DOM.

### `componentWillUnmount`

Called just before the component is removed from the DOM.

# Debugging

react Chrome extension

`$r` and `$0`

# Fond Awesome

We have installed version 4.7 as described in package.json. The examples on the websites use different css `fas`. In 4.7 it should be `fa`.

When using font-awesome there is no need to import in anywhere.

# Small code pieces

## Change Mouse Pointer

```
return (
  <i onClick={onLiked} style={{ cursor: "pointer" }} className={classes} />
);
```

# Errors

## Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.

Call onLiked when only passing the reference is the right way.

```
return (
  <i
    onClick={this.props.onLiked()}
    style={{ cursor: "pointer" }}
    className={classes}
  />
);
```

Correct:

```
return (
  <i onClick={this.props.onLiked}
  style={{ cursor: "pointer" }}
  className={classes} />
);
```
