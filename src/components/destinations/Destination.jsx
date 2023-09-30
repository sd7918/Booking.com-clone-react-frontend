import React from "react";
import "./Destination.css";

function destination({destination,quantity}) {
  return (
    <div>
      <div className="destinations">
          <p>
            <a href="#">{destination}</a>
          </p>
          <span>{quantity}</span>
      </div>
    </div>
  );
}

export default destination;
