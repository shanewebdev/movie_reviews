import React from 'react';
import { useState } from 'react';
import './App.css';
import searchIcon from './searchIcon.png'
import HeroCarousel from './HeroCarousel'
import Cards from './Cards';

function App() {
  const [movie, setMovie] = useState([]);
  const [search, setSearch] = useState('');

  const searchMovie = async (title) => {
    const response = await fetch(`http://www.omdbapi.com/?s=${title}&apikey=99002d47`)
    const data = await response.json();

    setMovie(data.Search);
  }

  return (
    <div className="App">
      <nav>
        <span className='title'>MovieStan</span>
        <span className='searchBar'>
          <input className='inputSearch'
            placeholder='Enter a title'
            value={search}
            onChange={(e) => setSearch(e.target.value)} />

          <img className='searchIcon'
            src={searchIcon}
            alt='search icon'
            onClick={() => searchMovie(search)}>
          </img>
        </span>
      </nav>

      <HeroCarousel />

      <div className='cardDisplay'>
        {movie.map((movieTitle) => (
          <Cards movieTitle={movieTitle} />
        ))}
      </div>

    </div >
  );
}

export default App;
