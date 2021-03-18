import React from "react";
import {useHistory} from "react-router-dom"
import {deleteCard} from "../utils/api/index"

export default function DisplayCard(card) {
  const history = useHistory();
  
  function editHandler(){
    history.push(`/decks/${card.card.deckId}/cards/${card.card.id}/edit`)
  }

  function deleteHandler(){
    if (window.confirm("Delete this card? This is permanent")) {
      deleteCard(card.card.id).then(history.push('/'))
      
  }
  }
  return (
    
      <div className="list-group-item">
        <div>{card.card.front}</div>
        <div>{card.card.back}</div>
        <button className="btn btn-secondary" onClick={editHandler}>Edit</button>
        <button className="btn btn-danger" onClick={deleteHandler}>Delete</button>
      </div>
    
  );
}
