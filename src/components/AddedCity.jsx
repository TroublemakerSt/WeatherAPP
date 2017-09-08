import React from 'react';
import { connect } from 'react-redux';
import { Input, Card } from 'antd';
import { getWeather, historyCity } from '../actions';

class AddedCity extends React.Component {
  onSearch = city => {
    this.props.dispatch(getWeather(city));
    this.props.dispatch(historyCity(city));
  };

  render() {
    const Search = Input.Search;
    return (
      <div>
        <Search
          placeholder="Search your city"
          style={{ width: 250, height: 50 }}
          onSearch={value => this.onSearch(value)}
        />
        {/* <div>{console.log('div', this.props.city)}</div> */}
        {/* <Card
          title={this.props.city}
          extra={<a href="#">More</a>}
          style={{ width: 300 }}
        /> */}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

function mapStateToProps(state) {
  return {
    city: state.historyCity
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddedCity);
