import axios from "axios";

const API_BASE_URL = "https://jr-weather-api-server.herokuapp.com/api/weather";
export function fetchCurrent(city, country = "au") {
  return axios
    .get(`${API_BASE_URL}/${country}/${city}`, {
      params: { weatherType: "current" }
    })
    .then(response => {
      const city = response.data.data.city;
      const current = response.data.data.current;
      return {
        city: `${city.name},${city.country}`,
        windDirection: current.windDirection,
        humidity: current.humidity,
        windSpeed: current.windSpeed,
        temp: { C: current.maxCelsius, F: current.maxFahrenheit }
      };
    });
}

export function fetchForecast(city, country = "au") {
  return axios
    .get(`${API_BASE_URL}/${country}/${city}`, {
      params: { weatherType: "forecast" }
    })
    .then(response => {
      const forecast = response.data.data.forecast;
      const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

      return [
        {
          day: weekday[new Date(forecast[0].time * 1000).getDay()],
          time: `${new Date(forecast[0].time * 1000).getUTCHours()}:00`,
          high: { C: forecast[0].maxCelsius, F: forecast[0].maxFahrenheit },
          low: { C: forecast[0].minCelsius, F: forecast[0].minFahrenheit }
        },
        {
          day: weekday[new Date(forecast[1].time * 1000).getDay()],
          time: `${new Date(forecast[1].time * 1000).getUTCHours()}:00`,
          high: { C: forecast[1].maxCelsius, F: forecast[1].maxFahrenheit },
          low: { C: forecast[1].minCelsius, F: forecast[1].minFahrenheit }
        },
        {
          day: weekday[new Date(forecast[2].time * 1000).getDay()],
          time: `${new Date(forecast[2].time * 1000).getUTCHours()}:00`,
          high: { C: forecast[2].maxCelsius, F: forecast[2].maxFahrenheit },
          low: { C: forecast[2].minCelsius, F: forecast[2].minFahrenheit }
        },
        {
          day: weekday[new Date(forecast[3].time * 1000).getDay()],
          time: `${new Date(forecast[3].time * 1000).getUTCHours()}:00`,
          high: { C: forecast[3].maxCelsius, F: forecast[3].maxFahrenheit },
          low: { C: forecast[3].minCelsius, F: forecast[3].minFahrenheit }
        },
        {
          day: weekday[new Date(forecast[4].time * 1000).getDay()],
          time: `${new Date(forecast[4].time * 1000).getUTCHours()}:00`,
          high: { C: forecast[4].maxCelsius, F: forecast[4].maxFahrenheit },
          low: { C: forecast[4].minCelsius, F: forecast[4].minFahrenheit }
        },
        {
          day: weekday[new Date(forecast[5].time * 1000).getDay()],
          time: `${new Date(forecast[5].time * 1000).getUTCHours()}:00`,
          high: { C: forecast[5].maxCelsius, F: forecast[5].maxFahrenheit },
          low: { C: forecast[5].minCelsius, F: forecast[5].minFahrenheit }
        },
        {
          day: weekday[new Date(forecast[6].time * 1000).getDay()],
          time: `${new Date(forecast[6].time * 1000).getUTCHours()}:00`,
          high: { C: forecast[6].maxCelsius, F: forecast[6].maxFahrenheit },
          low: { C: forecast[6].minCelsius, F: forecast[6].minFahrenheit }
        },
        {
          day: weekday[new Date(forecast[7].time * 1000).getDay()],
          time: `${new Date(forecast[7].time * 1000).getUTCHours()}:00`,
          high: { C: forecast[7].maxCelsius, F: forecast[7].maxFahrenheit },
          low: { C: forecast[7].minCelsius, F: forecast[7].minFahrenheit }
        },
        {
          day: weekday[new Date(forecast[8].time * 1000).getDay()],
          time: `${new Date(forecast[8].time * 1000).getUTCHours()}:00`,
          high: { C: forecast[8].maxCelsius, F: forecast[8].maxFahrenheit },
          low: { C: forecast[8].minCelsius, F: forecast[8].minFahrenheit }
        },
        {
          day: weekday[new Date(forecast[9].time * 1000).getDay()],
          time: `${new Date(forecast[9].time * 1000).getUTCHours()}:00`,
          high: { C: forecast[9].maxCelsius, F: forecast[9].maxFahrenheit },
          low: { C: forecast[9].minCelsius, F: forecast[9].minFahrenheit }
        }
      ];
    });
}
