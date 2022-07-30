import React from "react";

export default function Phonetics(props) {
  if (props.phonetics.audio) {
    return (
      <div className="Phonetics ">
        <audio src={props.phonetics.audio} controls></audio>
        {props.phonetics.text}
      </div>
    );
  }
}
