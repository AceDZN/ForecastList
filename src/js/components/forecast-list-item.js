import React,{ Component } from 'react';

import { Sparklines, SparklinesCurve } from 'react-sparklines';


export default class ForecastListItem extends Component{
  renderCityData(){
    const city = this.props.cityData.city.name;
    const country = this.props.cityData.city.country;
    const lon = this.props.cityData.city.coord.lon;
    const lat = this.props.cityData.city.coord.lat;
    const temperatures = this.props.cityData.list.map(weather=>weather.main.temp);
    const humidities = this.props.cityData.list.map(weather=>weather.main.humidity);
    const pressures = this.props.cityData.list.map(weather=>weather.main.pressure);

    return(
      <tr className="text-center">
        <td>
          <a href={"https://www.google.com/maps/@"+lat+","+lon+",8.81z"} target="_blank">
            {city}, {country}
          </a>
        </td>
        <td>
          <Sparklines data={temperatures} limit={50} width={300} height={50} margin={5}>
            <SparklinesCurve color="red" />
          </Sparklines>
        </td>
        <td>
          <Sparklines data={pressures} limit={50} width={300} height={50} margin={5}>
            <SparklinesCurve color="green" />
          </Sparklines>
        </td>
        <td>
          <Sparklines data={humidities} limit={50} width={300} height={50} margin={5}>
            <SparklinesCurve color="blue" />
          </Sparklines>
        </td>
      </tr>
    )
  }

  render(){
      if(this.props.cityData && this.props.cityData != null){
        return this.renderCityData();
      } else {
        return (
          <div></div>
        )
      }

  }

}
