import React, {useState, useEffect} from "react";
import { useHistory, useParams } from "react-router-dom";
import {listCards, readDeck, readCard} from "../utils/api";
import NotEnoughCards from "./NotEnoughCards"
import CardReader from "./CardReader"


function Study() {
  const [cards, setCards] = useState([]);
  const [card, setCard] = useState({});
  const [deck, setDeck] = useState({cards:[]})
  const id = useParams();
  //console.log(id.deckId);
  // useEffect(() => {
  //   const abortController = new AbortController();

  //   listCards(id.deckId, abortController.signal).then((data) => setCards(data));
  // },[])

   useEffect(() => {
     const abortController = new AbortController();

     readDeck(id.deckId, abortController.signal).then((data) => setDeck(data));
  },[])



//console.log(cards)
  if(deck.cards.length <= 2){
    return(
        <React.Fragment>
        <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="breadcrumb-item">
            <a href={`/decks/${id.deckId}`}>{deck.name}</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Study
          </li>
        </ol>
      </nav>
      <h3>{`Study:`}</h3>
        <NotEnoughCards />
        </React.Fragment>
    )
  }
  
  return (
    <React.Fragment>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="breadcrumb-item">
            <a href={`/decks/${id.deckId}`}>{deck.name}</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Study
          </li>
        </ol>
      </nav>

      <div>
        <CardReader deck={deck}/>
      </div>
    </React.Fragment>
  );
}

export default Study;
