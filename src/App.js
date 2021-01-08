import React from "react";
import './App.css';
import Logo from "./Components/logo"
import Login from "./Components/login_form"

function App() {
  return (
    <div className="App">
      <Logo/>
      <h2>Renewable energy solutions</h2>
        <p>Please enter your email below</p>
      <Login/>
    </div>
  );
}

export default App;
