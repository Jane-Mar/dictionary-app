import "./App.css";
import axios from "axios";
import React, { useState } from "react";
import Results from "./Results";

function App() {
  const [keyword, setKeyword] = useState(null);
  const [searchResult, setSearchResult] = useState(null);

  function handleResponse(response) {
    setSearchResult(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function getWord(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="App">
      <div className="container-fluid">
        <header>Dictionary</header>

        <main>
          <form onSubmit={search}>
            <input
              type="search"
              className="searchForm"
              placeholder="Type a word"
              onChange={getWord}
            />
          </form>
          <Results result={searchResult} />
        </main>

        <footer>
          <p>
            2022{` `}
            <a
              href="https://github.com/Jane-Mar/dictionary-app"
              rel="noreferrer"
              target="_blank"
            >
              open-sourced
            </a>
            , by Jane Marinina
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
