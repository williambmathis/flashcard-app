import React, { useState, useEffect } from "react";
import { useRouteMatch, useHistory } from "react-router-dom";
import { listDecks, deleteDeck } from "../utils/api/index";
import DeckListItem from "./DeckListItem"
import Study from "../Deck/Study";

function DeckList() {
    const [decks, setDecks] = useState([]);
    const history = useHistory();
    useEffect(() => {
        const abortController = new AbortController();

        listDecks(abortController.signal)
        .then(data => setDecks(data))
    },[])

    function createHandler(){
      history.push("/decks/new")
    }

    function handleDelete(id) {
      if (window.confirm("Delete this deck? This is permanent")) {
          deleteDeck(id).then(loadDecks)
          
      }
    }

    function loadDecks(){
      listDecks().then(setDecks)
    }


  const {url} = useRouteMatch();
  //console.log(url)
  return (
      
    <div className="container">
      <div>
          <button className="btn btn-secondary" onClick={createHandler}>Create Deck</button>
      </div>
      <div className="DeckList list-group">
        {decks.map(deck => <DeckListItem key={deck.id} deck={deck} handleDelete={handleDelete} />)}
      </div>
    </div>

    
    
  );
}

export default DeckList;