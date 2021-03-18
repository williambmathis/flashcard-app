import React, {useState, useEffect} from "react";
import { useHistory, useParams } from "react-router-dom";
import {createCard, updateCard, readCard} from "../utils/api/index"

function CardForm({deck, initialState, submitHandler, deckId}) {
    const para = useParams();
    const history = useHistory();
    const [card, setCard] = useState(initialState);
    const [front, setFront] = useState(initialState.front)
    const [back, setBack] =useState(initialState.back)
    console.log(front, back)
    
    // useEffect(() => {
    //   setCard(initialState)
    // }, []);
 
    //console.log(card)
    
  //   function submitHandler(event){
  //     event.preventDefault();
  //   if(para.cardId){
  //     console.log("editing")
  //     updateCard(card).then((savedCard) => history.push(`/decks/${savedCard.deckId}`))
      
  //   }
  //   else{
  //     console.log("creating")
  //     createCard(deck.id, card).then((savedCard) => history.push(`/decks/${savedCard.deckId}`))
      
  //   }
  // }
    
    // function changeHandler({ target: { name, value } }) {
    //     setCard((prevState) => ({
    //       ...prevState,
    //       [name]: value,
    //     }));
    //   }


    function changeHandler({ target: { name, value } }) {
      setFront(value);
      setCard({...card, front: value})
      
    }

    function changeHandlerBack({target: {name, value}}) {
      setBack(value);
      setCard({...card, back: value})
    }


    function cancelHandler(){
      history.push(`/decks/${deckId}`)
    }

    function localSubmit(event) {
      event.preventDefault();
      //initital state obj 
      //update init state with front and back new values if they exist
      //call the submit handler with the new object that we created
      console.log("local handler called", card)
      submitHandler(card)
      

    }
    console.log(card)
    
    return (
        <div>
        <form onSubmit={localSubmit}>
          <div>
            <label htmlFor="name">
              Front:
              <textarea
                name="name"
                value={front}
                onChange={changeHandler}
              />
            </label>
          </div>
          <div>
            <label htmlFor="description">
              Back:
              <textarea
                name="description"
                value={back}
                onChange={changeHandlerBack}
              />
            </label>
          </div>
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </form>
        <button className="btn btn-secondary" onClick={cancelHandler}>
          Cancel
        </button>
      </div>
  );
}

export default CardForm;
