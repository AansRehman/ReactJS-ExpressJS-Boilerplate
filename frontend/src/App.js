// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useEffect, useState } from 'react';
import Axios from 'axios';

function App() {

 const [listofUsers, setlistofUsers] = useState([]);
 const [username , setUsername] = useState("");

  useEffect(()=>{
    Axios.get("http://localhost:3001/getUsers").then((response)=> {
      setlistofUsers(response.data)
    })
  }, []);

const createUser=()=>{
  Axios.post("http://localhost:3001/createUser", {username,}).then((response)=>{
    alert("USER CREATED!");
  });
}
  return (
    <div className="App">
      <div className="usersDiplay">
        <h4>The users in DB are:</h4>
        {listofUsers.map((user)=>{
          return(
            <div>
              <h5>{user.username}</h5>
            </div>
          )
        })}
        </div> 
      <header className="App-header">
        <h3>Enter your Name: </h3>
        <input type="txet" onChange={(event)=>{
          setUsername(event.target.value);
        }}/>
        <br/>
        <button onClick={
          createUser
          }>Insert in DB</button>
    
        </header>
    
    </div>

  );
}

export default App;
