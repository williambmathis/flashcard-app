import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import {deleteDeck, listDecks} from "../utils/api/index"

export default function DeckListItem({ deck, handleDelete}) {
  const history = useHistory();
  const deckDeleter = false;

  function handleView() {
    console.log("view");
    history.push(`/decks/${deck.id}`);
  }

  function handleStudy() {
    console.log("study");
    history.push(`/decks/${deck.id}/study`);
  }



 

  const { name, cards, description, id } = deck;
  return (
    <li className="list-group-item">
      <div>
        {name} 
      </div>
      <div>{cards.length} cards</div>
      <div>{description}</div>
      <div>
        <button className="btn btn-secondary" onClick={handleView}>
          View
        </button>
        <button className="btn btn-primary" onClick={handleStudy}>
          Study
        </button>
        <button className="btn btn-danger" onClick={() => handleDelete(id)}>
          Delete
        </button>
      </div>
    </li>
  );
}
