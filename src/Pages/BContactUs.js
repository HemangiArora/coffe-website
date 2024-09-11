import axios from "axios";
import { useState } from "react";

export default function BContactUs() {
  const [userdata, setUserData] = useState({ name: "", email: '', ph_no: 0 });

  function sendData() {
    axios.post("http://localhost:8080/contact_user", userdata).then(response => {
      if (response.status === 200) {
        let d = response.data;
        // console.log(d);
        console.log(d.msg);
        console.log(response.status);
      }
    });
  }

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#282c34', // Background color of the container
    color: 'white', // Text color
  };

  const inputStyle = {
    marginBottom: '10px',
    padding: '8px',
    fontSize: '16px',
    backgroundColor: '#555', // Background color of the input
    color: 'white', // Text color of the input
  };

  const buttonStyle = {
    padding: '6px',
    fontSize: '18px',
    backgroundColor: 'white',
    color: 'black',
    cursor: 'pointer',
  };

  return (
    <div style={containerStyle}>
      <div>
        <label>Enter Name</label><br />
        <input type="text" style={inputStyle} onChange={e => { setUserData({ ...userdata, name: e.target.value }) }} />
      </div>

      <div>
        <label>Enter Email</label><br />
        <input type="email" style={inputStyle} onChange={e => { setUserData({ ...userdata, email: e.target.value }) }} />
      </div>

      <div>
        <label>Enter Phone Number</label><br />
        <input type="number" style={inputStyle} onChange={e => { setUserData({ ...userdata, ph_no: e.target.value }) }} />
      </div>

      <div>
        <input type="button" onClick={sendData} style={buttonStyle} value="Submit" /> 
        &nbsp; &nbsp; <a href="/">Home</a>
      </div>

      
        
      

    </div>
  );
}