import React from "react";

export default function Meaning(props) {
  return (
    <div>
      <h3>{props.meaning.partOfSpeech}</h3>
      <div>
        {props.meaning.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              {definition.definition}
              <em>{definition.example}</em>
            </div>
          );
        })}
      </div>
    </div>
  );
}
