import React from "react";

export default function Meaning(props) {
  return (
    <dl className="Meaning">
      <dt>{props.meaning.partOfSpeech}</dt>
      <dd>
        {props.meaning.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              {definition.definition}
              <div className="mb-3">
                <i>{definition.example}</i>
              </div>
            </div>
          );
        })}
      </dd>
    </dl>
  );
}
