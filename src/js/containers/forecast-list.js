import React, {Component} from 'react';
import {connect} from 'react-redux';


export class ForecastList extends Component{
  renderCityForecast(cityData){
    return(
      <tr key={cityData.city.id}>
        <td>
          <a href={"https://www.google.com/maps/@"+cityData.city.coord.lat+","+cityData.city.coord.lon+",8.81z"} target="_blank">
            {cityData.city.name}, {cityData.city.country}
          </a>
        </td>
        <td>Temperature</td>
        <td>Pressure</td>
        <td>Humidity</td>
      </tr>
    )
  }

  render(){
    return(
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderCityForecast)}

        </tbody>
      </table>
    )
  }
}



function mapStateToProps({weather}){
  return {weather}
}

export default connect(mapStateToProps)(ForecastList)
