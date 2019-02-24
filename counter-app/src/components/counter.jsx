import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    //imageURL: "https://picsum.photos/200"
    tags: ["tag1", "tag2", "tag3"]
  };

  styles = {
    fontSize: 20,
    fontWeight: "bold"
  };

  // constructor() {
  //   super();

  //   this.handleIncrement = this.handleIncrement.bind(this.state);
  // }

  handleIncrement = id => {
    this.setState({ count: this.state.count + 1 });

    console.log(id);
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement(1)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <ul>
          {this.state.tags.map(t => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </div>
    );
  }

  getBadgeClasses() {
    const { count } = this.state;
    return "badge m-2 " + (count === 0 ? "badge-warning" : "badge-primary");
  }

  formatCount() {
    const { count } = this.state;

    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
