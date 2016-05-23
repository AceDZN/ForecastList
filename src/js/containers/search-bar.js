import React,{Component} from 'react';

export default class SearchBar extends Component{
  constructor(props){
    super(props);

    this.state = {
      term: ''
    }

    this.handleTermChange = this.handleTermChange.bind(this)
  }

  handleTermChange(e){
    this.setState({
      term:e.target.value
    });
  }
  handleSearchSubmit(e){
    e.preventDefault();
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
