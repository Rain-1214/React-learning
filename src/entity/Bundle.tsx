import * as React from 'react';

interface BundlePropsType {
  load: Function;
  loading: Function;
}

class Bundle extends React.Component<BundlePropsType> {
  state = {
    mod: null,
  };

  componentWillMount () {
    this.load(this.props);
  }

  load (props: BundlePropsType) {
    props.load((mod: { default: object }) => {
      this.setState({
        mod: mod.default ? mod.default : mod
      });
    });
  }

  render () {
    return this.state.mod ? this.state.mod : this.props.loading();
  }

}

export default Bundle;