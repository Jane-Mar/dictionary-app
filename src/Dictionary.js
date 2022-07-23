import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState(null);

  function search(event) {
    event.preventDefault();
    alert(`looking for ${keyword}`);
  }

  function getWord(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <header>Add some style or logo here</header>
      <main>
        <form onSubmit={search}>
          <input type="search" placeholder="Type a word" onChange={getWord} />
          <input type="submit" value="Search" />
        </form>
      </main>
      <footer>add some footer here</footer>
    </div>
  );
}
