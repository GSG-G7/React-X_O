import React from "react";

export default class Square extends React.Component {
  state = {
    value: null
  };

  onclickHandler = () => {
    this.setState({ value: "X" });
  };

  render() {
    return (
      <button className="square" onClick={this.onclickHandler}>
        {this.state.value}
      </button>
    );
  }
}
