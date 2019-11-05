import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div class="card">
        <img src="./vishukj.jpg" alt="John" className="profile_pic"></img>
        <h1>Vishweshwarayya Janagoud</h1>
        <p class="title">Developer & Designer</p>
        <p>Visveswaraya Technological University</p>
        <div className="base_margin">
          <a href="/">
            <i class="fa fa-dribbble"></i>
          </a>
          <a href="/">
            <i class="fa fa-twitter"></i>
          </a>
          <a href="/">
            <i class="fa fa-linkedin"></i>
          </a>
          <a href="/">
            <i class="fa fa-facebook"></i>
          </a>
        </div>
        <p>
          <button>Contact</button>
        </p>
      </div>
    </div>
  );
}

export default App;
