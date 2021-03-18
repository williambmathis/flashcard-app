import React,{useEffect, useState} from "react";
import { useHistory, useParams } from "react-router";
import CardForm from "./CardForm"
import {createCard, readDeck} from "../utils/api/index"
function AddCard(){
    const para = useParams();
    const [deck, setDeck] = useState({});
    const [card, setCard] = useState({front:"", back: ""});
    const history = useHistory();
    useEffect(() => {
        const abortController = new AbortController();
    
        readDeck(para.deckId, abortController.signal).then((data) => setDeck(data));
      }, []);

      function submitHandler(newCard){
        createCard(para.deckId, newCard).then(history.push(`/decks/${para.deckId}`))
      }

    return(
        <div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href={`/decks/${deck.id}`}>{deck.name}</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Add Card
            </li>
          </ol>
        </nav>
        <h3>{deck.name}: Add Card</h3>
        <CardForm deck={deck} submitHandler={submitHandler} initialState={card} deckId={para.deckId}  />
      </div>
    )
}

export default AddCard;