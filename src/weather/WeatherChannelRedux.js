import React from "react";
import { connect } from "react-redux";
import CityCondition from "./CityCondition";
import Forecast from "./Forecast";
import Toolbar from "./Toolbar";

class WeatherChannelRedux extends React.Component {
  render() {
    const { condition, forecast, unit } = this.props;
    return (
      <React.Fragment>
        <Toolbar
          unit={unit}
          switchTemp={() => {
            this.switchTemp();
          }}
        />
        <main>
          <CityCondition data={condition} unit={unit} />
          <Forecast data={forecast} unit={unit} />
        </main>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    condition: state.weatherData.condition,
    forecast: state.weatherData.forecast,
    unit: state.options.tempUnit
  };
};

export default connect(mapStateToProps)(WeatherChannelRedux);
