import React from "react";

export default function Forecast(props) {
  const { data, unit, switchToFiveItem, switchtToTenItem, size } = props;

  const daylist = data.slice(0, size).map(d => (
    <div className="weather-forecast__row">
      <span className="weather-forecast__day">{d.day}</span>
      <span className="weather-forecast__icon">
        <i className="fa fa-clock-o" /> {d.time}
      </span>
      <span className="weather-forecast__high">
        {d.high[unit]} {unit}
      </span>
      <span className="weather-forecast__low">
        {d.low[unit]} {unit}
      </span>
    </div>
  ));

  return (
    <section className="weather-forecast">
      <div className="forecast__switch">
        <button
          className="forecast__switch_0 switch-active"
          onClick={switchToFiveItem}
        >
          5 items
        </button>
        <button className="forecast__switch_1" onClick={switchtToTenItem}>
          10 items
        </button>
      </div>

      {daylist}

      {/* <div className="weather-forecast__row">
        <span className="weather-forecast__day">{data[2].day}</span>
        <span className="weather-forecast__icon">
          <i className="fa fa-clock-o" /> {data[2].time}
        </span>
        <span className="weather-forecast__high">
          {data[2].high[unit]} {unit}
        </span>
        <span className="weather-forecast__low">
          {data[2].low[unit]} {unit}
        </span>
      </div> */}
    </section>
  );
}
