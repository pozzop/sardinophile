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
    <a href="https://www.lecomptoirduportugal.com/boutique/produits-de-la-mer/pack-galice-sardinophile-conserves-poisson-exeption-galice-espagne/">
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
