import React, { useEffect, useState } from 'react'

export default function SwapUser({users}) {

  const activeUser = users.find(user => user.active);
  const [usersData, setUsersData] = useState(users);
  
  const [count, setCount] = useState(activeUser.counter);
  useEffect(() => {
    const activeUser = users.find(user => user.active);
    console.log(activeUser);
  }, [usersData, users])
  
  function swapUser() {
    setUsersData((prevUsers) => {
      const updatedUsers = [...prevUsers];
      const activeUser = updatedUsers.find(user => user.active);
      const nextUserIndex = activeUser.id < users.length ? activeUser.id % users.length + 1 : activeUser.id - 1;
      console.log(nextUserIndex);
      const nextUser = updatedUsers.find(user => user.id === nextUserIndex);

      if(activeUser && nextUser) {
        activeUser.active = false;
        nextUser.active = true;
      }

      console.log(count);

      return updatedUsers;
    });

  }


  function increment(){

    setCount(count + 1);
    setUsersData(prev => {
      const updatedUsers = [...prev];

      const activeUser = updatedUsers.find(user => user.active);

      if(activeUser) {
        activeUser.counter = count;
      }

      console.log(activeUser)
      return updatedUsers
    })
  }

  function decrement() {
    setCount(count - 1);
  }

  return (
    <div className='py-10'>
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
        <button onClick={decrement} className='px-4 py-1 bg-black text-gray-200 rounded-md flex items-center'>-</button>
        <button onClick={increment} className='px-4 py-1 text-gray-200 bg-black rounded-md flex items-center'>+</button>
      </div>
      <div className='pt-10'>
        <button onClick={swapUser} className='' style={{backgroundColor: 'skyblue', padding: '10px', borderRadius: '10px'}}>swap</button>
      </div>
    </div>
  )
}
