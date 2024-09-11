
// import axios from "axios";
// import { useState } from "react";
// export default function BSignIn(){
//     const[userdata,setUserData] = useState({name:"",email:'',pass:0});
    


//     function sendData()
//     {
//         axios.post("http://localhost:8080/signin_user",userdata).then(response=>{
//             if(response.status===200)
//             {
//                 let d = response.data;
//                 // console.log(d);
//                 console.log(d.msg);
//                 console.log(response.status);
//             }
//         });
//     }
//     return(<>
//     <div>
//         <label>Enter Name</label><br/>
//         <input type="text" onChange={e=>{setUserData({...userdata,name:e.target.value})}}/>
//     </div>

//     <div>
//         <label>Enter Email</label><br/>
//         <input type="email" onChange={e=>{setUserData({...userdata,email:e.target.value})}}/>
//     </div>

//     <div>
//         <label>Enter Password</label><br/>
//         <input type="password" onChange={e=>{setUserData({...userdata,pass:e.target.value})}}/>
//     </div>

//     <div>
//         <input type="button" onClick={sendData} value="BSignIn"/>
//     </div>

//     </>)
// }


// import axios from "axios";
// import { useState } from "react";

// export default function BSignIn() {
//   const [userdata, setUserData] = useState({ name: "", email: '', pass: 0 });

//   function sendData() {
//     axios.post("http://localhost:8080/signin_user", userdata).then(response => {
//       if (response.status === 200) {
//         let d = response.data;
//          //console.log(d);
//         console.log(d.msg);
//         console.log(response.status);
//       }
//     });
//   }

//   const containerStyle = {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: '100vh',
//     backgroundColor: '#282c34', // Background color of the container
//     color: 'white', // Text color
//   };

//   const inputStyle = {
//     marginBottom: '10px',
//     padding: '8px',
//     fontSize: '16px',
//     backgroundColor: '#555', // Background color of the input
//     color: 'white', // Text color of the input
//   };

//   const buttonStyle = {
//     padding: '6px',
//     fontSize: '18px',
//     backgroundColor: 'white',
//     color: 'black',
//     cursor: 'pointer',
//   };

//   return (
//     <div style={containerStyle}>
//       <div>
//         <label>Enter Name</label><br />
//         <input type="text" style={inputStyle} onChange={e => { setUserData({ ...userdata, name: e.target.value }) }} />
//       </div>

//       <div>
//         <label>Enter Email</label><br />
//         <input type="email" style={inputStyle} onChange={e => { setUserData({ ...userdata, email: e.target.value }) }} />
//       </div>

//       <div>
//         <label>Enter Password</label><br />
//         <input type="password" style={inputStyle} onChange={e => { setUserData({ ...userdata, pass: e.target.value }) }} />
//       </div>

//       <div>
//         <input type="button" onClick={sendData} style={buttonStyle} value="SignIn" />
//         &nbsp; &nbsp; <a href="/">Home</a>
//       </div>
//     </div>
//   );
// }

import React, { useState } from 'react';
import axios from 'axios';

const BSignIn = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [error, setError] = useState('');
  const [isLoginSuccessful, setIsLoginSuccessful] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAlert = (message, type = 'success') => {
    if (type === 'success') {
      alert(message);
    } else {
      alert(message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!formData.username || !formData.password) {
      setError('Username and password are required');
      return;
    }
  
    try {
      const response = await axios.post('http://localhost:8080/login', formData);
      handleAlert(response.data.message, 'success');
      setIsLoginSuccessful(true);
    } catch (error) {
      handleAlert('Login failed. Check your credentials.', 'error');
      console.log('Login failed. Check your credentials.');
      setIsLoginSuccessful(false); // Reset isLoginSuccessful state to false
    }
  };
  return (
    <div style={styles.container}>
      {error && <p style={styles.error}>{error}</p>}
      {isLoginSuccessful && (
        <p style={styles.success}>
          Login successful! <a href="/" style={styles.link}>Go to Homepage</a>
        </p>
      )}
      {!isLoginSuccessful && (
        <>
          <label style={styles.label}>
            Enter your name<br />
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              style={styles.input}
              placeholder="username"
            />
          </label>
          <br />
          <label style={styles.label}>
            Enter Password<br />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              style={styles.input}
              placeholder="password"
            />
          </label>
          <br />
          <button
            onClick={handleSubmit}
            style={styles.button}
          >
            SignIn
          </button>
        </>
      )}
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
    color: 'white',
  },
  error: {
    color: 'red',
  },
  success: {
    color: 'green',
  },
  link: {
    color: 'white',
    textDecoration: 'underline',
    cursor: 'pointer',
  },
  label: {
    display: 'block',
    marginBottom: '10px',
  },
  input: {
    marginLeft: '10px',
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    width: '200px',
  },
  button: {
    backgroundColor: 'white',
    color: 'black',
    padding: '10px 20px',
    cursor: 'pointer',
    borderRadius: '4px',
    border: 'none',
  },
};

export default BSignIn;
