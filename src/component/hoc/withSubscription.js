import React from 'react';
import DataSource from './DataSource'

export default (Component, selectData) => {

  return class NewComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: selectData(DataSource, props)
      }
    }

    render () {
      return (
        <Component data={this.state.data} {...this.props} />
      )
    }

  }

}