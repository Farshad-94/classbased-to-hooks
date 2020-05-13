import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import LoadingSpinner from './components/LoadingSpinner';
import SeasonDisplay from './components/SeasonDisplay';

export default class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        lat: null,
        error: ''
      };
    }

    componentDidMount() {
      window.navigator.geolocation.getCurrentPosition(
        position => this.setState({ lat: position.coords.latitude }),
        err => this.setState({ error: err.message })
      );
    }

  render() {
    return(
      <div>
        {  this.state.error && !this.state.lat ? ( <div> Error: {this.state.error} </div> )
          : !this.state.error && this.state.lat ? ( <SeasonDisplay lat={this.state.lat} /> )
          : ( <LoadingSpinner message='Please accept location request'/> )
        }
      </div>
    );
  }
}

ReactDOM.render(<App />,document.getElementById('root'));