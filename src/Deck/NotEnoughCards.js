import React from "react";

function NotEnoughCards() {
  return (
    <div className="NotFound">
      <h1>Not Enough Cards</h1>
      <p>You need at least 3 cards to study.</p>
      <button className="btn btn-primary">Add Cards</button>
    </div>
  );
}

export default NotEnoughCards;
