import { SetVisFilterType, Types } from '../action/actionTypes';
import { Reducer } from 'redux';

const setVisibilityFilter: Reducer<string> = (state: string, action: SetVisFilterType): string => {
  switch (action.type) {
    case Types.SET_VISIBILITY_FILTER:
      return action.filter;
    default: return state;
  }
};

export default setVisibilityFilter;