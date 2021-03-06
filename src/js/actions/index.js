import axios from 'axios';

const API_KEY = '806a11197dbdfbd7f81f86ffb1fbb565';
const FORECAST_URL = `https://api.openweathermap.org/data/2.5/forecast?units=metric&appid=${API_KEY}`;

export const FETCH_FORECAST = 'FETCH_FORECAST';

export function fetchForecastFor(city){
  const url = `${FORECAST_URL}&q=${city}`;
  const request = axios.get(url);
  return{
    type: FETCH_FORECAST,
    payload: request
  };
}
