import * as Loadable from 'react-loadable';
import * as React from 'react';

export const PrivateComponent = Loadable({
  loader: () => import('../component/PrivateComponent/PrivateComponent'),
  loading: () => {
    return (
      <div><h1>Loading...</h1></div>
    );
  }
});
