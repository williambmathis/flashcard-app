import React, { useState, useEffect } from "react";
import { readDeck, deleteDeck } from "../utils/api/index";
import { useParams, useHistory } from "react-router-dom";
import DisplayCard from "./DisplayCard";

function DisplayDeck() {
  const id = useParams();
  const history = useHistory();
  const [deck, setDeck] = useState({cards: []});
  // const [cards, setCards] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();

    readDeck(id.deckId, abortController.signal).then((data) => setDeck(data));
  }, []);

  function editHandler(){
    console.log("edited")
    history.push(`/decks/${id.deckId}/edit`)
  }

  function handleDelete() {
    if (window.confirm("Delete this deck? This is permanent")) {
        deleteDeck(id.deckId).then(history.push('/'))
        
    }
  }

  function studyHandler(){
    history.push(`/decks/${id.deckId}/study`)
  }

  function addHandler(){
    history.push(`/decks/${id.deckId}/cards/new`)
  }

  // useEffect(() => {
  //   const abortController = new AbortController();
  //   console.log(id)
  //   listCards(id.deckId, abortController.signal).then((data) => setCards(data));
  //   console.log(cards)
    
  // }, []);
  //console.log(JSON.stringify(deck))
  return (
    <React.Fragment>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            <a href={`/decks/${id.deckId}`}> {deck.name}</a>
          </li>
        </ol>
      </nav>
      <div>
        <h4>{deck.name}</h4>
      </div>

      <div>{deck.description}</div>
      <br />
      <button className="btn btn-secondary" onClick={editHandler}>Edit</button>
      <button className="btn btn-primary" onClick={studyHandler}>Study</button>
      <button className="btn btn-primary" onClick={addHandler}>Add Cards</button>
      <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
      <div className="list-group">
        <br />
        <h3>Cards</h3>
        {deck.cards.map((card) => (
          <DisplayCard key={card.id} card={card} />
        ))}
      </div>
    </React.Fragment>
  );
}
export default DisplayDeck;
