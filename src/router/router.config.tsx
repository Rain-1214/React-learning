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

export const Home = Loadable({
  loader: () => import('../component/Home/Home'),
  loading() {
    return <div>Loading...</div>;
  }
});
export const About = Loadable({
  loader: () => import('../component/About/About'),
  loading() {
    return <div>Loading...</div>;
  }
});
export const Tips = Loadable({
  loader: () => import('../component/Tips/Tips'),
  loading() {
    return <div>Loading...</div>;
  }
});
