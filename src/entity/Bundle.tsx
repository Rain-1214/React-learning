import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface BundlePropsType {
  // tslint:disable-next-line:no-any
  load: Promise<any>;
  loading: Function;
}

class Bundle extends React.Component<BundlePropsType> {
  // tslint:disable-next-line:no-any
  state: { mod: null | React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any> } = {
    mod: null,
  };

  componentWillMount () {
    this.load(this.props);
    // console.log('Bundle comWillMount:', this.props);
  }

  load (props: BundlePropsType) {
    props.load.then((mod: { default?: object }) => {
      // console.log(mod);
      this.setState({
        mod: mod.default ? mod.default : mod
      });
    });
  }

  render () {
    // console.log('Bundle render:', this.state.mod);
    return this.state.mod ? <this.state.mod {...this.props} /> : this.props.loading();
  }

}

export default Bundle;