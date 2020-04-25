import React from "react";

function CenteredColumns(props) {
  return (
    <div className="is-variable is-multiline columns is-centered is-4">
      {props.children}
    </div>
  );
}

export default CenteredColumns;
