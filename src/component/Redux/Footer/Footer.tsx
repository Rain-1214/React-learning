import * as React from 'react';
import FilterLink from '../../../containers/FilterLink';
import { ShowType } from '../../../containers/VisibleTodoList';
import { RouteComponentProps } from 'react-router';

const Footer = (props: RouteComponentProps<{ filter: string}>) => (
  <p>
    Show:
    {' '}
    <FilterLink {...props} filter={ShowType.SHOW_ALL}>
      All
    </FilterLink>
    {', '}
    <FilterLink {...props} filter={ShowType.SHOW_ACTIVE}>
      Active
    </FilterLink>
    {', '}
    <FilterLink {...props} filter={ShowType.SHOW_COMLETED}>
      Completed
    </FilterLink>
  </p>
);

export default Footer;