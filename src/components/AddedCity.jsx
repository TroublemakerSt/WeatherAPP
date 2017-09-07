import React from 'react';
import { connect } from 'react-redux';
import { Input } from 'antd';
import { getWeather } from '../actions';

class AddedCity extends React.Component {
  onSearch = city => {
    this.props.dispatch(getWeather(city));
  };

  render() {
    const Search = Input.Search;
    return (
      <Search
        placeholder="Search your city"
        style={{ width: 250, height: 50 }}
        onSearch={value => this.onSearch(value)}
      />
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

export default connect(null, mapDispatchToProps)(AddedCity);
