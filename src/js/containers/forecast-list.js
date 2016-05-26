import React, {Component} from 'react';
import {connect} from 'react-redux';
import ForecastListItem from '../components/forecast-list-item';

export class ForecastList extends Component{

  renderCityForecast(cityData){

    return(
      <ForecastListItem key={cityData.city.id} cityData={cityData}/>
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
