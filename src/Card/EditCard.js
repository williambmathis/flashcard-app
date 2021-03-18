import React,{useEffect, useState} from "react";
import { useParams, useHistory } from "react-router-dom";
import CardForm from "./CardForm";
import {readCard, readDeck, updateCard} from "../utils/api/index";

function EditCard() {
    const para = useParams();
    const history = useHistory();
    const [deck, setDeck] = useState({});
    const [card, setCard] = useState({front: "", back: ""});

    useEffect(() => {
      const abortController = new AbortController();
  
      readDeck(para.deckId, abortController.signal).then((data) => setDeck(data));
    }, []);

    useEffect(() => {
      const abortController = new AbortController();

      readCard(para.cardId, abortController.signal).then((data) => setCard(data));
    }, []);
    console.log(card)

    function submitHandler(newCard){
      console.log("submit handler called", newCard)
      updateCard(newCard).then((savedCard) => history.push(`/decks/${savedCard.deckId}`))
    }
    
  return (
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
            Edit Card {para.cardId}
          </li>
        </ol>
      </nav>
      <h3>{deck.name}: Edit Card</h3>
      {card.id ? <CardForm deck = {deck} initialState={card} submitHandler={submitHandler} deckId={para.deckId} />: <p>`Loading`</p>}
    </div>
  );
}

export default EditCard;
