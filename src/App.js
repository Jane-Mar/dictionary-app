import "./App.css";
import axios from "axios";
import React, { useState } from "react";
import Results from "./Results";
import Images from "./Images";

function App() {
  const [keyword, setKeyword] = useState(null);
  const [searchResult, setSearchResult] = useState(null);
  const [image, setImage] = useState(null);

  function handleImage(response) {
    setImage(response.data);
  }

  function handleResponse(response) {
    setSearchResult(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

    const imgApiKey = `563492ad6f9170000100000111090a4d7e0f4c6e8ea0919ebdace8c1`;
    let imgApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    axios
      .get(imgApiUrl, { headers: { Authorization: `Bearer ${imgApiKey}` } })
      .then(handleImage);
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
          <Images result={image} />
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
