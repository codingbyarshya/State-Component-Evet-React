// Exercise State - Create a `Counter` class component
/*
import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
      </div>
    );
  }
}

export default Counter;
*/
//==============================================================================================================================================
//Exercise State - Counter props
/*
import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.initialValue,
    };
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({ count: this.state.count + this.props.incrementAmount });
    }, this.props.incrementInterval);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
      </div>
    );
  }
}

export default Counter;
*/
//==============================================================================================================================================
//Exercise State - 'CounterDisplay' component
/*
import React, { Component } from 'react';
import CounterDisplay from './CounterDisplay';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.initialCount
    };
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState(prevState => ({
        count: prevState.count + props.incrementAmount
      }));
    }, props.interval);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <div>
        <CounterDisplay count={this.state.count} />
      </div>
    );
  }
}

export default Counter;
*/

import React, { Component } from 'react';

const CounterDisplay = ({ count }) => <h1>Count: {count}</h1>;

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.initialCount,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        count: prevState.count + this.props.incrementAmount,
      }));
    }, this.props.incrementInterval);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return <CounterDisplay count={this.state.count} />;
  }
}

export default Counter;

