import React, { Component } from "react";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="app-shell">
        <div className="app-shell__container app-shell__container--small" />
        <div className="app-shell__container">
          <div className="home">
            <h1 className="home__title">Hello world</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
