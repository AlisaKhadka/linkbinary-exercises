import React, { useState} from 'react';
const  LoginForm = () => {
    const [ formData, setFormData] = useState({ email:"", password:"",});
    
    const handleChange =(e) =>{
        setFormData({
            ...formData, [e.target.name]:e.target.value,
        }) ;
    };
    const handleSubmit=(e) =>{
        e.preventDefault();
        console.log("Email:", formData.email);
        console.log("password:", formData.password);
        setFormData({email:"",password:""});
    };
     
  return (
    <form onSubmit={handleSubmit}>
        <input
        type="email" name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        />

        <input 
        type="password" name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
        />

        <button type="submit">Submit</button>
    </form>
  )
};

 export default LoginForm;



/*  more simpler to understand
import { useState } from "react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    setEmail("");
    setPassword("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br />

      <button type="submit">Submit</button>
    </form>
  );
}

export default LoginForm;

 */




// or more simpler than that to understand
/* import { useState } from "react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Email:", email);
    console.log("Password:", password);

    setEmail("");
    setPassword("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={handleEmailChange}
        placeholder="Email"
      />

      <input
        type="password"
        value={password}
        onChange={handlePasswordChange}
        placeholder="Password"
      />

      <button type="submit">Submit</button>
    </form>
  );
}

export default LoginForm;
 */