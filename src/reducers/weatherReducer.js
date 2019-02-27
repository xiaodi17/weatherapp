const initialState = {
  condition: {
    city: "Brisbane, Au",
    humidity: 90,
    windSpeed: 9,
    windDirection: "NS",
    temp: { C: 26, F: 70 }
  },
  forecast: [
    {
      day: "Fri",
      time: "13:00",
      high: { C: 26, F: 70 },
      low: { C: 20, F: 60 }
    },
    {
      day: "Fri",
      time: "13:00",
      high: { C: 26, F: 70 },
      low: { C: 20, F: 60 }
    },
    {
      day: "Fri",
      time: "13:00",
      high: { C: 26, F: 70 },
      low: { C: 20, F: 60 }
    },
    {
      day: "Fri",
      time: "13:00",
      high: { C: 26, F: 70 },
      low: { C: 20, F: 60 }
    },
    {
      day: "Fri",
      time: "13:00",
      high: { C: 26, F: 70 },
      low: { C: 20, F: 60 }
    }
  ]
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    //case FETCH_WEATHER SUCCESS;
    //RETURN NEW STEATE
    default:
      return state;
  }
};

export default weatherReducer;
