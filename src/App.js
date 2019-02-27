import React, { Component } from "react";
import { Provider } from "react-redux";
import logo from "./logo.svg";
import "./styles/main.css";

import store from "./store";
import Header from "./weather/Header";
import Footer from "./weather/Footer";
import WeatherChannel from "./weather/WeatherChannel";
import WeatherChannelRedux from "./weather/WeatherChannelRedux";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="weather-channel__container">
          <Header />
          <WeatherChannel />
          <Footer />
        </div>
      </Provider>
    );
  }
}

export default App;
