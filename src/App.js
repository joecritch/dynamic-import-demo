import React, { Component } from 'react';

import Loadable from 'react-loadable';
class Loading extends Component {
  render() {
    return (
      <div>
        Loading...
      </div>
    );
  }
}

class App extends Component {
  state = {
    dynamicComponentName: null,
  };
  componentDidMount() {
    // Using fetch so it can't statically analyze... (or can it?!)
    fetch('http://localhost:3000/componentName.json')
      .then(res => res.json())
      .then(json => {
        this.setState({
          dynamicComponentName: json.name,
        });
      });
  }
  render() {
    if (this.state.dynamicComponentName) {
      const Component = Loadable({
        loader: () => import('./' + this.state.dynamicComponentName),
        loading: Loading,
      });
      return <Component />;
    } else {
      return 'Fetching dynamic component...';
    }
  }
}

export default App;
