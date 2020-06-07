import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 1 },
      { id: 2, value: 2 },
      { id: 3, value: 3 },
      { id: 4, value: 4 },
    ],
  };
  render() {
    return (
      <div>
        {this.state.counters.map((cnt) => (
          <Counter key={cnt.id} onDelete={this.handleDelete} counter={cnt} />
        ))}
      </div>
    );
  }

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };
}

export default Counters;
