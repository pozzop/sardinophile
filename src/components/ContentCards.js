import React from "react";
import CenteredColumns from "./CenteredColumns";
import "./ContentCards.scss";

function ContentCards(props) {
  return (
    <CenteredColumns>
      {props.people.map((item, index) => (
        <div className="column is-half-tablet is-3" key={index}>
          <a className="ContentCards__card card is-flex" href={item.url}>
            <div className="card-image">
              <figure className="image is-4by3">
                <img src={item.image} alt={item.title}></img>
              </figure>
            </div>
            <div className="card-content">
              <div className="content">
                <h4 className="has-text-centered">{item.title}</h4>
                <p className="has-text-centered">{item.body}</p>
              </div>
            </div>
          </a>
        </div>
      ))}
    </CenteredColumns>
  );
}

export default ContentCards;
