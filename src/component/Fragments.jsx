import React from 'react';
import FragmentsItems from './FragmentsItems';

export default class Fragments extends React.Component {

  componentWillMount() {
    // const a = this.convert(-123);
    // console.log(a)
  }

  convert(x) {
    var y = 0;
    var maxValue = Math.pow(2, 31) - 1;
    while (x !== 0) {
        if (y > (maxValue / 10) || y < (-maxValue / 10)) {
            return 0;
        }
        y = y * 10 + x % 10;
        // console.log(y)
        x = parseInt(x / 10, 10);
    }
    return y;
  };

  render() {

    return (
      <table>
        <tbody>
          <tr>
            <FragmentsItems />
          </tr>
        </tbody>
      </table>
    )
  }

}
