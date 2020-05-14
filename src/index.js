import React from 'react';
import ReactDOM from 'react-dom';
import LoadingSpinner from './components/LoadingSpinner';
import SeasonDisplay from './components/SeasonDisplay';
import useLocation from './components/UseLocation';

const App = () => {

  const [lat, error] = useLocation();

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