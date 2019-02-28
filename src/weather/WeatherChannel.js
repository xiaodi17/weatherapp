import React from "react";
import CityCondition from "./CityCondition";
import Forecast from "./Forecast";
import Toolbar from "./Toolbar";

import { fetchCurrent, fetchForecast } from "../api/weather";

export default class WeatherChannel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      condition: {
        city: "Brisbane, Au",
        humidity: 62,
        windSpeed: 9,
        windDirection: "NS",
        temp: { C: 26, F: 70 }
      },
      forecast: [
        {
          day: "Fri",
          time: "16:00",
          high: { C: 26, F: 70 },
          low: { C: 20, F: 60 }
        },
        {
          day: "Fri",
          time: "16:00",
          high: { C: 26, F: 70 },
          low: { C: 20, F: 60 }
        },
        {
          day: "Fri",
          time: "16:00",
          high: { C: 26, F: 70 },
          low: { C: 20, F: 60 }
        },
        {
          day: "Fri",
          time: "16:00",
          high: { C: 26, F: 70 },
          low: { C: 20, F: 60 }
        },
        {
          day: "Fri",
          time: "16:00",
          high: { C: 26, F: 70 },
          low: { C: 20, F: 60 }
        },
        {
          day: "Fri",
          time: "16:00",
          high: { C: 26, F: 70 },
          low: { C: 20, F: 60 }
        },
        {
          day: "Fri",
          time: "16:00",
          high: { C: 26, F: 70 },
          low: { C: 20, F: 60 }
        },
        {
          day: "Fri",
          time: "16:00",
          high: { C: 26, F: 70 },
          low: { C: 20, F: 60 }
        },
        {
          day: "Fri",
          time: "16:00",
          high: { C: 26, F: 70 },
          low: { C: 20, F: 60 }
        },
        {
          day: "Fri",
          time: "16:00",
          high: { C: 26, F: 70 },
          low: { C: 20, F: 60 }
        }
      ],
      unit: "C",
      curCity: "melbourne",
      itemList: 5
    };
  }

  componentDidMount() {
    fetchCurrent(this.state.curCity).then(data => {
      //console.log(data);
      this.setState({ condition: data });
    });
    fetchForecast(this.state.curCity).then(data => {
      //console.log(data);
      this.setState({ forecast: data });
    });
  }

  switchTemp() {
    if (this.state.unit === "C") {
      this.setState({ unit: "F" });
    } else {
      this.setState({ unit: "C" });
    }
  }

  changeCity(event) {
    //console.log(event.target.value);
    this.setState({ curCity: event.target.value });
  }

  switchToFiveItem() {
    this.setState({ size: 5 });
    console.log(this.state.size);
  }

  switchtToTenItem() {
    this.setState({ size: 10 });
    console.log(this.state.size);
  }

  render() {
    const { condition, forecast, unit, curCity, itemList } = this.state;
    return (
      <React.Fragment>
        <Toolbar
          curCity={curCity}
          changeCity={event => this.changeCity(event)}
          unit={unit}
          switchTemp={() => {
            this.switchTemp();
          }}
          componentDidMount={() => this.componentDidMount()}
        />
        <main>
          <CityCondition data={condition} unit={unit} />
          <Forecast
            data={forecast}
            unit={unit}
            itemList={itemList}
            switchToFiveItem={() => this.switchToFiveItem()}
            switchtToTenItem={() => this.switchtToTenItem()}
          />
        </main>
      </React.Fragment>
    );
  }
}
