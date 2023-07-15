import React from "react";
import "./App.css";
import SwapUser from "./components/SwapUser";

const users = [
  {
    id: 1,
    name: "chandu",
    counter: 0,
    active: true
  },
  {
    id: 2,
    name: "shekar",
    counter: 0,
    active: false,
  },
];
function App() {
  return (
    <div className="App">
      <SwapUser users={users}/>
    </div>
  );
}

export default App;
