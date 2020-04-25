import React from "react";
import "./Section.scss";

function Section(props) {
  const {
    color,
    size,
    backgroundImage,
    backgroundImageOpacity,
    children,
    // Passed to section element
    ...otherProps
  } = props;

  return (
    <section
      className={
        "SectionComponent hero is-relative section is-block" +
        (color ? ` is-${color}` : "") +
        (size ? ` is-${size}` : "")
      }
      {...otherProps}
    >
      {props.children}
    </section>
  );
}

export default Section;
