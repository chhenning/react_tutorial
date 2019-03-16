import React, { Component } from "react";

class Counter extends Component {
  render() {
    const id = this.props.counter.id;

    return (
      <div className="row">
        <div className="col-1">
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        </div>
        <div className="col">
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm"
          >
            +
          </button>
          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="btn btn-secondary btn-sm m-2"
            disabled={this.getState()}
          >
            -
          </button>
          <button
            onClick={() => this.props.onDelete(id)}
            className="btn btn-danger btn-sm"
          >
            x
          </button>
        </div>
      </div>
    );
  }

  getState() {
    const { value } = this.props.counter;
    return value === 0 ? true : false;
  }

  getBadgeClasses() {
    const { value } = this.props.counter;
    return "badge m-2 " + (value === 0 ? "badge-warning" : "badge-primary");
  }

  formatCount() {
    const { value } = this.props.counter;

    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
