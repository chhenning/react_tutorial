import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    // object destructuring
    const { onReset, counters, onDelete, onIncrement } = this.props;

    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map(c => (
          <Counter
            key={c.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={c}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
