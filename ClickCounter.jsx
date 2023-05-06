//Exercise Events - ClickCounter
/*
import React, { Component } from 'react';

class ClickCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleClick = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleClick}>Click Here</button>
      </div>
    );
  }
}

export default ClickCounter;
*/
//===========================================================================================================================================
//Events - ClickTracker
import React, { Component } from 'react';

class ClickTracker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastClicked: null,
    };
  }

  handleClick = (event) => {
    this.setState({
      lastClicked: event.target.name,
    });
  };

  render() {
    return (
      <div>
        <h1>Last Clicked: {this.state.lastClicked}</h1>
        <button name="Omer" onClick={this.handleClick}>Omer</button>
        <button name="Alberto" onClick={this.handleClick}>Alberto</button>
        <button name="Arshya" onClick={this.handleClick}>Arshya</button>
      </div>
    );
  }
}

export default ClickTracker;
