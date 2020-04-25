import React from "react";
import "./SectionHeader.scss";

function SectionHeader(props) {
  // Render nothing if no title or subtitle
  if (!props.title && !props.subtitle) {
    return null;
  }

  return (
    <header
      className={
        "SectionHeader has-text-centered" +
        (props.className ? ` ${props.className}` : "")
      }
    >
      {props.title && (
        <h1
          className={
            "title has-text-weight-bold is-uppercase is-3" +
            (props.size ? ` is-${props.size}` : "") +
            (props.size === 1 ? " is-size-2-mobile" : "") +
            (props.spaced ? " is-spaced" : "")
          }
        >
          {props.title}
        </h1>
      )}

      {props.subtitle && (
        <p
          className={
            "subtitle is-italic is-4" + (props.size > 4 ? " is-6" : "")
          }
        >
          <span className="SectionHeader__no-classname">{props.subtitle}</span>
        </p>
      )}
    </header>
  );
}

export default SectionHeader;
