import React from 'react';

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

export default class TemperatureInput extends React.Component {

  handleChange (event) {
    this.props.temperatureChange(event.target.value)
  }

  render() {
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[this.props.scale]}:</legend>
        <input type="text" value={this.props.temperature} onChange={this.handleChange.bind(this)}/>
      </fieldset>
    )
  }

}
