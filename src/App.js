import React from "react";
import './Style.scss';
import Logo from "./Components/logo"
import Login from "./Components/login_form"

function App() {
  return (
    <div className="container">
      <div className="App">
        <Logo/>
        <h2>Operations studio</h2>
        <p className="prompt">Please enter your email below</p>
        <Login/>
      </div>
    </div>
  );
}

export default App;
