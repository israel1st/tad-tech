import React, {useState, useEffect} from 'react';

// import io from 'socket.io-client';

const token = localStorage.getItem("jwtToken");
// const socket = io.connect('http://localhost:5000',{query: token});

function ChatBar () {
  // const [users, setUsers] = useState([]);




  // useEffect(() => {
    // socket.on('newUser', (data) => setUsers(data));
    // socket.disconnect();
    // console.log(users)
  // }, [socket, users]);

  return (
    <div className='chat__sidebar'>
        <h2>Open Chat</h2>
        <div>
            <h4  className='chat__header'>ACTIVE USERS</h4>
            <div className='chat__users'>
                {/* {users.map(user => <p key={user}>{user}</p>)} */}
            </div>
        </div>
  </div>
  )
}

export default ChatBar