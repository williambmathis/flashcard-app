import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { readDeck, updateDeck } from "../utils/api/index";

function DeckEdit({initialState ={name: "" ,description: "" }}) {
  const id = useParams();
  const history = useHistory();
  const [deck, setDeck] = useState(initialState);

  useEffect(() => {
    const abortController = new AbortController();

    readDeck(id.deckId, abortController.signal).then((data) => setDeck(data));
  }, []);
  
  function handleSubmit(event) {
    event.preventDefault();
    console.log(deck)
   
    updateDeck(deck).then((savedDeck) =>
      history.push(`/decks/${savedDeck.id}`)
    );
  }

  function changeHandler({ target: { name, value } }) {
    setDeck((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function handleCancel() {
    history.push(`/decks/${deck.id}`);
  }
  return (
    <React.Fragment>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Edit Deck
          </li>
        </ol>
      </nav>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">
              Name:
              <input
                type="text"
                name="name"
                value={deck.name}
                //placeholder={deck.name}
                onChange={changeHandler}
              />
            </label>
          </div>
          <div>
            <label htmlFor="description">
              Description:
              <textarea
                name="description"
                value={deck.description}
                onChange={changeHandler}
              />
            </label>
          </div>
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </form>
        <button className="btn btn-secondary" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </React.Fragment>
  );
}

export default DeckEdit;
