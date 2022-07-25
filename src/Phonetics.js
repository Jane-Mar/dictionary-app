import React from "react";

export default function Phonetics(props) {
  if (props.phonetics.audio) {
    return (
      <div className="Phonetics">
        <a href={props.phonetics.audio} target="_blank">
          link{" "}
        </a>
        {props.phonetics.text}
      </div>
    );
  }
}
