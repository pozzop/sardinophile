import React from "react";
import CenteredColumns from "./CenteredColumns";
import "./Features3.scss";

function Features3(props) {
  return (
    <CenteredColumns>
      {props.items.map((item, index) => (
        <div className="column has-text-centered" key={index}>
          <div className="Features3__feature">
            <div
              className={`Features3__icon icon is-size-1 has-text-${item.iconColor}`}
            >
              <i className={`${item.iconClass}`}></i>
            </div>
            <h1 className="title is-4 is-spaced">{item.title}</h1>
            <h2 className="subtitle is-6 has-text-grey-darker">
              {item.subtitle}
            </h2>
          </div>
        </div>
      ))}
    </CenteredColumns>
  );
}

export default Features3;
