import React from 'react';
import TemperatureInput from './TemperatureInput';

export default class Form extends React.Component {

  constructor () {
    super()
    this.state = {
      temperature: '0',
      scale: 'c'
    }
  }

  handleCelsiusChange(temperature) {
    this.setState({
      temperature,
      scale: 'c'
    })
  }

  handleFahrenheitChange(temperature) {
    this.setState({
      temperature,
      scale: 'f'
    })
  }

  toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
  }
  
  toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
  }

  render () {
    const temperature = this.state.temperature
    const celsius = this.state.scale === 'c' ? temperature : this.toCelsius(temperature);
    const fahrenheit = this.state.scale === 'f' ? temperature : this.toFahrenheit(temperature); 
    return (
      <form>
        <TemperatureInput temperature={celsius} scale='c' temperatureChange={this.handleCelsiusChange.bind(this)} />
        <TemperatureInput temperature={fahrenheit} scale='f' temperatureChange={this.handleFahrenheitChange.bind(this)} />
      </form>
    )
  }
}

