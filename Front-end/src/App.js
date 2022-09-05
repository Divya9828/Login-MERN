import './App.css';
import React,{useState} from 'react'
import axios from 'axios'


function App() {
  var [username,getName]=useState('')
  var [email,getEmail]=useState('');
  // login check
  var submitButton=()=>
  {
    axios.post("http://localhost:5000/select",{user:username,email:email}).then((response)=>
    {
      console.log(response.status)
      if(response.status===200)
      {
        alert('login successfully')
      }
      if(response.status===204)
      {
        alert('invalid login')
      }
      console.log(response.data)
    })
  }
  
  return (
    <div className="App">
      <div>
        <label>USERNAME</label>
        <input type="text" onChange={(e)=>{getName(e.target.value)}}></input><br></br>
        <label>EMAIL</label>
        <input type="text" onChange={(e)=>{getEmail(e.target.value)}}></input><br></br>
        <button onClick={submitButton}>Login</button>
      </div>
    </div>
  );
}

export default App;
