import React from "react";

function SectionButton(props) {
  const {
    parentColor,
    size,
    state,
    fullWidth,
    // Passed to button element
    ...otherProps
  } = props;

  return (
    <a href="https://nouvellevague-bordeaux.fr/produits/">
      <button
        className={
          "button is-rounded" +
          ([
            "primary",
            "info",
            "success",
            "warning",
            "danger",
            "black",
            "dark",
          ].includes(parentColor)
            ? ` is-${parentColor} is-inverted`
            : "") +
          (["white", "light"].includes(parentColor) || !parentColor
            ? " is-link"
            : "") +
          (size ? ` is-${size}` : "") +
          (state ? ` is-${state}` : "") +
          (fullWidth ? " is-fullwidth" : "")
        }
        {...otherProps}
      >
        {props.children}
      </button>
    </a>
  );
}

export default SectionButton;
