import React, { useState } from "react";
import {useHistory} from "react-router-dom";
import {createDeck} from "../utils/api/index"

function CreateDeck() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const history =useHistory();

  function handleSubmit(event) {
    event.preventDefault();
    //event.setName(eve)
    const deck={
        name: name,
        description: description
    }
    createDeck(deck).then(savedDeck => history.push(`/decks/${savedDeck.id}`))
    
    
  }

  function handleNameChange(event) {
      setName(event.target.value)
      console.log(name)
  }

  function handleDescriptionChange(event) {
      setDescription(event.target.value)
      console.log(description)
  }
  function handleCancel(){
      
    history.push("/")
}

  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Create Deck
          </li>
        </ol>
      </nav>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">
            Name:
            <input type="text" name="name" value={name} onChange={handleNameChange} />
          </label>
        </div>
        <div>
          <label htmlFor="description">
            Description:
            <textarea name="description" value={description} onChange={handleDescriptionChange}/>
          </label>
        </div>
        <button className="btn btn-primary" type="submit">Submit</button>

        
      </form>
      <button className="btn btn-secondary" onClick={handleCancel}>Cancel</button>
    </div>
  );
}

export default CreateDeck;
