import React, { useState } from "react";
import Tweet from './Tweet';
import './App.css';

function App(){
  const [users, setUsers] = useState([
    {name: 'Bas', message: 'my message number 1'},
    {name: 'jelle', message: 'my mes # 1'},
    {name: 'User 3', message: 'my Tweety message'},
    
  ])

  return(
    <div className='app'>
      {users.map(user => (
        <Tweet name={user.name} message={user.message} />
      ))}
     
    </div>
  );
}

export default App;