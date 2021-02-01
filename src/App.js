import React, {useState} from 'react';

import './App.css';

import ListOfGifs from './components/ListOfGifs';
import { Link, Route } from "wouter";

function App() {

  return (
    <div className="App">
      <section className="App-content">
      <Link to="/gif/:panda">Gifs de pandas</Link>
      <Link to="/gif/:cat">Gifs de gatos</Link>
      <Link to="/gif/:dog">Gifs de perros</Link>
      <Route path="/gif/:keyword" component= {ListOfGifs} />


      </section>
    </div>
  );
}

export default App;
