import { SetVisFilterType, Types } from '../action/actionTypes';
import { Reducer } from 'redux';
import { ShowType } from '../../containers/VisibleTodoList';

const setVisibilityFilter: Reducer<string> = (state: string = ShowType.SHOW_ALL, action: SetVisFilterType): string => {
  switch (action.type) {
    case Types.SET_VISIBILITY_FILTER:
      return action.filter;
    default: return state;
  }
};

export default setVisibilityFilter;