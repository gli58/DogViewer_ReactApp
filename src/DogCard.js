// Name: Gavin Li
// Course: WEBD-2013 (271014) Web Development 2
// Assignment 5: React
// Date: 2025-07-07

import React from "react";

function DogCard({ image }) {
  return (
    <div className="card">
      <img src={image} alt="Dog" className="dog-image" />
    </div>
  );
}

export default DogCard;
