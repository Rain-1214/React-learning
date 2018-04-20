import * as React from 'react';
import FilterLink from '../../../containers/FilterLink';
import { ShowType } from '../../../containers/VisibleTodoList';

const Footer = () => (
  <p>
    Show:
    {' '}
    <FilterLink filter={ShowType.SHOW_ALL}>
      All
    </FilterLink>
    {', '}
    <FilterLink filter={ShowType.SHOW_ACTIVE}>
      Active
    </FilterLink>
    {', '}
    <FilterLink filter={ShowType.SHOW_COMLETED}>
      Completed
    </FilterLink>
  </p>
);

export default Footer;