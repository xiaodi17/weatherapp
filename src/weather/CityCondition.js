import React from "react";
import iumberella from "../images/icon-umberella.png";
import iwind from "../images/icon-wind.png";
import icompass from "../images/icon-compass.png";

/**
 *
 * @param {*} props
 * data = {
 *  city: 'Brisbane, Au',
 *  humidity: 62,
 *  windSpeed: 9,
 *  windDirection: 'NS',
 *  temp: {C: 26, F:70}
 * }
 */

export default function CityCondition(props) {
  const { data, unit } = props;
  return (
    <section className="weather-condition">
      <div className="weather-condition__location">{data.city}</div>
      <div style={{ textAlign: "center", fontSize: 14 }}>Clear</div>
      <div className="weather-condition__temp">
        {data.temp[unit]} {unit}
      </div>
      <div className="weather-condition__desc">
        <div>
          <img src={iumberella} />
          <span className="citem">{data.humidity}</span>
        </div>
        <div>
          <img src={iwind} />
          <span className="citem">{data.windSpeed}</span>
        </div>
        <div>
          <img src={icompass} />
          <span className="citem">{data.windDirection}</span>
        </div>
      </div>
    </section>
  );
}
