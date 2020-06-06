import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: this.props.value,

    // tags: ["tag1", "tag2", "tag3"],
  };

  handleIncrement = () => {
    console.log();
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.state.count}</span>
        <button
          onClick={() => this.handleIncrement()}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no Tags!!</p>;
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }
}
export default Counter;
