import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Winfo from "./components/WInfo";
import Wform from "./components/Wform";

class App extends React.Component {
  getWeather = (e) => {
    console.log("submiting");
  };

  render() {
    return (
      <div className="container p-4">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <Wform getWeather={this.getWeather} />
            <Winfo />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
