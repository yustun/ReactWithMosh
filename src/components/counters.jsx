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
        <button
          onClick={this.handleReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.state.counters.map((cnt) => (
          <Counter
            key={cnt.id}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            counter={cnt}
          />
        ))}
      </div>
    );
  }

  handleReset = () => {
    this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
  };
  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };
  handleIncrement = (counter) => {
    const counters = [...this.state.counters]; //Clone the array
    const index = counters.indexOf(counter);
    // counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };
}

export default Counters;
