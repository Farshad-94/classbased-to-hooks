import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import LoadingSpinner from './components/LoadingSpinner';
import SeasonDisplay from './components/SeasonDisplay';

const App = () => {

  const [lat, setLat] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      position => setLat(position.coords.latitude),
      err => setError(err.message)
    );
//empty array means, only run function one time in life cycle of component
  }, []);

  let content;
  if (error && !lat) {
    content = <div> Error: {error} </div>;
  } else if (!error && lat) {
    content = <SeasonDisplay lat={lat} />;
  } else {
    content = <LoadingSpinner message='Please accept location request'/>;
  }

  return <div className="border red">{content}</div>;
}

ReactDOM.render(<App />,document.getElementById('root'));