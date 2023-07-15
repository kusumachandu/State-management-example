import React, { useEffect, useState } from 'react'

export default function SwapUser({users}) {

  const activeUser = users.find(user => user.active);
  const [usersData, setUsersData] = useState(users);
  
  const [count, setCount] = useState(activeUser.counter);
  function swapUser() {
    setUsersData(prevUsers => {
      const updatedUsers = [...prevUsers];
    const activeUserIndex = updatedUsers.findIndex(user => user.active);

    if (activeUserIndex !== -1) {
      const nextUserIndex = (activeUserIndex + 1) % updatedUsers.length;
      updatedUsers[activeUserIndex].active = false;
      updatedUsers[nextUserIndex].active = true;
    }
      return updatedUsers;
    });
  }

  function increment() {
    setCount(prevCount => prevCount + 1);
    setUsersData(prevUsers => {
      const updatedUsers = prevUsers.map(user => {
        if (user.active) {
          return { ...user, counter: user.counter + 1 };
        }
        return user;
      });
      return updatedUsers;
    });
  }

  function decrement() {
    setCount(prevCount => prevCount - 1);
    setUsersData(prevUsers => {
      const updatedUsers = prevUsers.map(user => {
        if (user.active) {
          return { ...user, counter: user.counter - 1 };
        }
        return user;
      });
      return updatedUsers;
    });
  }

  useEffect(() => {
    const activeUser = usersData.find(user => user.active);
    setCount(activeUser.counter);
  }, [usersData]);

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
