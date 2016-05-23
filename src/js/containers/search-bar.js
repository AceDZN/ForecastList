import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchForecastFor} from '../actions/index';

export class SearchBar extends Component{
  constructor(props){
    super(props);

    this.state = {
      term: ''
    }

    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
  }

  handleTermChange(e){
    this.setState({
      term:e.target.value
    });
  }
  handleSearchSubmit(e){
    e.preventDefault();
    this.props.fetchForecastFor(this.state.term);
    this.setState({term:''});
  }

  render(){
    return(
      <form onSubmit={this.handleSearchSubmit} className="form-group has-success has-feedback">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Type a city name"
            value={this.state.term}
            onChange={this.handleTermChange}
          />
          <span className="input-group-btn">
            <button className="btn btn-success" type="submit">Search</button>
          </span>
        </div>

      </form>
    )
  }

}


function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchForecastFor},dispatch);
}
export default connect(null,mapDispatchToProps)(SearchBar);
