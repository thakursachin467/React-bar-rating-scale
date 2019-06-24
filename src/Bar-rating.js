import React from "react";

export function BarRating(props) {
  return (
    <>
      <input
        type="radio"
        name="rating"
        id={props.id}
        value={props.id}
        onClick={event => console.log(event.target.value)}
      />
      <label htmlFor={props.id}>{props.id}</label>
    </>
  );
}
