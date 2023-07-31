import React from 'react';

import Header from './components/Header';
import PopularMovies from './components/PopularMovies';
import PopularTV from './components/PopularTV';


const App = () => {

  return (
<div>
      <Header />
      <PopularMovies />
      <PopularTV />
    </div>
  );
};

export default App;

