import React from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import DeckList from "../Home/DeckList";
import { Route, Switch } from "react-router-dom";
import Study from "../Deck/Study";
import DisplayDeck from "../Deck/DisplayDeck";
import CreateDeck from "../Create/CreateDeck";
import DeckEdit from "../Deck/DeckEdit"
import EditCard from "../Card/EditCard";
import AddCard from "../Card/AddCard";

function Layout() {
  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <DeckList />
          </Route>
          <Route exact path={`/decks/new`}>
            <CreateDeck />
          </Route>
          <Route exact path={`/decks/:deckId`}>
            <DisplayDeck />
          </Route>
          <Route exact path={`/decks/:deckId/edit`}>
            <DeckEdit />
          </Route>
          <Route exact path={`/decks/:deckId/cards/new`}>
            <AddCard />
          </Route>
          <Route exact path={`/decks/:deckId/cards/:cardId/edit`}>
            <EditCard />
          </Route>
          <Route exact path={`/decks/:deckId/study`}>
            <Study />
          </Route>

          <Route>
            <NotFound />
          </Route>
        </Switch>
        {/* TODO: Implement the screen starting here */}
      </div>
    </React.Fragment >
  );
}

export default Layout;
