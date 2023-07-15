import React, { useState } from 'react'

export default function SwapUser({users}) {
  const [usersData, setUsersData] = useState(users);
  const [count, setCount] = useState(0);

  function swapUser() {
    setUsersData((prevUsers) => {
      const updatedUsers = [...prevUsers];
      const activeUser = updatedUsers.find(user => user.active);
      const nextUserIndex = activeUser.id < users.length ? activeUser.id % users.length + 1 : 1;
      console.log(nextUserIndex);
      const nextUser = updatedUsers.find(user => user.id === nextUserIndex);

      if(activeUser && nextUser) {
        activeUser.active = false;
        nextUser.active = true;
      }

      console.log(nextUser);

      return updatedUsers;
    });


  }

  return (
    <div>
      <section style={{display: 'flex', justifyContent: 'space-evenly'}}>
        {usersData?.map((user, index) => (
          <div key={index} className={`user ${user.active ? 'active' : ''}`}>
            <div className={`user ${user.active ? 'bg-cyan-100' : ''}`} style={{border: '2px solid whitesmoke', borderRadius: '10px', boxShadow: "inherit" , paddingLeft: '30px', paddingRight: "30px", paddingTop: '30px', paddingBottom: "30px"}}>
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
      <div>
        <button onClick={swapUser} className='' style={{backgroundColor: 'skyblue', padding: '10px', borderRadius: '10px'}}>swap</button>
      </div>
    </div>
  )
}
