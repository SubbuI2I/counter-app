import React, { Component } from "react";

class Counter extends Component {
  render() {
    console.log("Counter-Rendered");
    return (
      <div>
        <span className={this.getBadgeClasses()} style={{ color: "black" }}>
          {this.formatCount()}
        </span>

        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn-primary"
        >
          Increment
        </button>

        <button
          className="btn-danger"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>

        {/* <ul>
          {this.state.tags.map((item) => (
            <li key={item}>{item} </li>
          ))}
        </ul> */}
      </div>
    );
  }

  // componentDidMount() {
  //   console.log("Counter-Mounted");
  // }
  componentDidUpdate() {
    console.log("Counter-Updated");
  }
  componentWillUnmount() {
    console.log("Counters-Unmounted");
  }

  getBadgeClasses() {
    let classNames = "badge m-2 ";
    classNames +=
      this.props.counter.value === 0 ? "badge-warning" : "badge-primary";
    return classNames;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Nothing" : count;
  }
}

export default Counter;
