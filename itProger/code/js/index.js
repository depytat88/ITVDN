import React from 'react';
import ReactDOM from "react-dom";
import {createStore} from "redux";
import allReducers from "./reducers";

const store = createStore(allReducers);

ReactDOM.render(
  <h2>Здесь может быть любой текст!!!</h2>, 
  document.getElementById('fieldToShow')
);
