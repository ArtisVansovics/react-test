import React, { useState } from 'react';
import './App.scss';
import Episodes from './data/data';
import Card from './components/Card/Card';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [searchResult, setSearchResult] = useState([...Episodes]);
  const [searchActive, setSearchActive] = useState(false);

  return (
    <div className="App">
      <div className="container">
        <div className="row center-xs">
          <div className="col-xs-12">
            <div className="box flow-column">
              <form
                className="search-form"
                onSubmit={(e) => {
                  const newEpisodes = [...Episodes];

                  e.preventDefault();
                  setSearchResult(newEpisodes
                    .filter((episode) => episode.name.toLowerCase().includes(inputValue)));
                  setSearchActive(true);
                }}
              >
                <input
                  type="text"
                  className="input"
                  placeholder="Episode name"
                  value={inputValue}
                  onChange={(e) => {
                    setInputValue(e.target.value);
                  }}
                  required
                />
                <button
                  className="btn"
                  disabled={inputValue === ''}
                >
                  Search
                </button>
              </form>
              {searchActive
                && (
                <p>
                  {`Found: ${searchResult.length} of ${Episodes.length}`}
                </p>
                )}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <div className="box">
              {!searchActive && Episodes.map((episode) => (
                <Card
                  key={episode.id}
                  image={episode.image.medium}
                  name={episode.name}
                  eppSeason={episode.season}
                  eppNumber={episode.number}
                  length={episode.runtime}
                  rating={episode.rating.average}
                />
              ))}
              {(searchActive && (searchResult.length !== 0)) ? searchResult.map((episode) => (
                <Card
                  key={episode.id}
                  image={episode.image.medium}
                  name={episode.name}
                  eppSeason={episode.season}
                  eppNumber={episode.number}
                  length={episode.runtime}
                  rating={episode.rating.average}
                />
              )) : <h1>Nothing Found</h1>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
