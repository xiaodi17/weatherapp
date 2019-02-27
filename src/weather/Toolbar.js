import React from "react";

export default function Toolbar(props) {
  const { unit, switchTemp, curCity, changeCity, componentDidMount } = props;
  return (
    <nav>
      <div style={{ flex: 1 }}>
        <input className="search-input" value={curCity} onChange={changeCity} />
        <button className="search-btn" onClick={componentDidMount}>
          <i className="fa fa-search" />
        </button>

        <button className="temp-switch" onClick={switchTemp}>
          <i
            className="fa fa-thermometer-empty"
            aria-hidden="true"
            style={{ paddingRight: 5 }}
          />
          <sup>&deg;</sup>
          {unit}
        </button>
      </div>
    </nav>
  );
}
