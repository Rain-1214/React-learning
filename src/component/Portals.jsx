import React from 'react';
import PortalsChildren from './PortalsChildren';
import Clock from './Clock';

export default class Portals extends React.Component {

  render () {
    return (
      <div>
        <ul>
          <li>Parent</li>
          <li>
            <PortalsChildren>
              <Clock />
            </PortalsChildren>
          </li>
        </ul>
      </div>
    )
  }
}