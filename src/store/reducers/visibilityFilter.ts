
interface ActionsType {
  id: number;
  type: string;
  filter: () => void;
}

const visibilityFilter = (state: string = 'SHOW_ALL', actions: ActionsType) => {
  switch (actions.type) {
    case 'SET_VISIBILITY_FILTER':
      return actions.filter;
    default :
      return state;
  }
};

export default visibilityFilter;