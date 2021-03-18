import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { listCards, readCard, readDeck } from "../utils/api";


export default function CardReader({deck}) {
  const [front, setFront] = useState(true);
  const [cards, setCards] = useState([]);
  const [card, setCard] = useState({});

  const [index, setIndex] = useState(0);
  const history = useHistory();


  function handleFlip() {
    console.log("Flip");
    setFront(!front);
  }

  function handleNext() {
    if(index === deck.cards.length-1){
      if(window.confirm("Restart cards?")){
        setIndex(index - index);
        setFront(true);
        return;
      }
      else{
        history.push("/")
      }
    }
    console.log("Next", index);
    setIndex(index + 1);
    setFront(true);
  }

  const id = useParams();

  // useEffect(() => {
  //   const abortController = new AbortController();

  //   listCards(id.deckId, abortController.signal).then((data) => setCards(data));
  // }, []);

  const cardIdList = cards.map((card) => card.id);


  // useEffect(() => {
  //   const abortController = new AbortController();

  //   readDeck(id.deckId, abortController.signal).then((data) => setDeck(data));
  // }, []);

  // useEffect(() => {
  //   const abortController = new AbortController();

  //   readCard(id.deckId, abortController.signal).then((data) => setCard(data));
  // }, []);


  //console.log(cards);

  if (front === false) {
    return (
      <div>
        <div>
          <h3>{`${deck.name}: Study`}</h3>
        </div>
        <div><h4>Card {index+1} of {deck.cards.length}</h4></div>
        <div>
        {deck.cards[index] && deck.cards[index].back}
        </div>
        <button className="btn btn-secondary" onClick={handleFlip}>
          Flip
        </button>
        <button className="btn btn-primary" onClick={handleNext}>
          Next
        </button>
      </div>
    );
  }
  return (
    <div>
      <div>
        <h3>{`${deck.name}: Study`}</h3>
      </div>
      <div><h4>Card {index+1} of {deck.cards.length}</h4></div>
      <div>
        {deck.cards[index] && deck.cards[index].front}
      </div>
      <button className="btn btn-secondary" onClick={handleFlip}>
        Flip
      </button>
    </div>
  );
}
