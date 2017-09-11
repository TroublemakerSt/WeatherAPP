import React from 'react';
import { connect } from 'react-redux';
import { Input, Card, Collapse, Button } from 'antd';
import { getWeather, historyCity, deleteHistoryCity } from '../actions';

class AddedCity extends React.Component {
  onSearch = city => {
    this.props.dispatch(getWeather(city));
    this.props.dispatch(historyCity(city, this.props.temperature));
  };

  onDelete = id => {
    this.props.dispatch(deleteHistoryCity(id));
  };

  render() {
    const Search = Input.Search;
    const Panel = Collapse.Panel;

    const customPanelStyle = {
      background: '#f7f7f7',
      borderRadius: 4,
      marginBottom: 24,
      border: 0,
      overflow: 'hidden',
      fontSize: '1em'
    };

    return (
      <div>
        <Search
          placeholder="Search your city"
          style={{ width: 250, height: 50 }}
          onSearch={value => this.onSearch(value)}
        />
        <Collapse bordered={false} style={{ fontSize: 20 }}>
          <Panel header="History Of Searching" key="1" style={customPanelStyle}>
            {this.props.city.map((city, index) => (
              <p key={index}>
                {city.city}
                <Button type="danger" onClick={() => this.onDelete(city.id)}>
                  Delete
                </Button>
              </p>
            ))}
          </Panel>
        </Collapse>
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
    city: Object.keys(state.history.historyCity).map(
      key => state.history.historyCity[key]
    )
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddedCity);
