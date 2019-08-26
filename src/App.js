import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
        recusandae consectetur quis cum quo ab porro assumenda eaque suscipit
        alias fugit laudantium, modi quia quae. Voluptatibus explicabo officiis
        deleniti animi, ut, optio, maiores vero culpa esse impedit quo illo
        modi. Labore natus sunt perspiciatis! Neque!
        <Footer />
      </div>
    );
  }
}

export default App;
