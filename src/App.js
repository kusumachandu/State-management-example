import React, { useState } from "react";
import "./App.css";

const users = [
  {
    name: "chandu",
    counter: 0,
  },
  {
    name: "shekar",
    counter: 0,
  },
];
function App() {
  const [currentUser, setCurrentUser] = useState();
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <section style={{display: 'flex', justifyContent: 'space-evenly'}}>
        {users.map((user, index) => (
          <div key={index}>
            <div style={{border: '2px solid whitesmoke', borderRadius: '10px', boxShadow: "inherit" , paddingLeft: '30px', paddingRight: "30px", paddingTop: '30px', paddingBottom: "30px"}}>
              <h1>{user.name}</h1>
            </div>
          </div>
        ))}
      </section>
      <h2>
        {count}
      </h2>
      <div style={{display: 'flex', gap: "20px", justifyContent: 'center', paddingTop: '30px'}}>
        <button style={{padding: '14px', backgroundColor: "black", color: "white"}}>-</button>
        <button style={{padding: '13px', backgroundColor: "black", color: "white"}}>+</button>
      </div>
    </div>
  );
}

export default App;
