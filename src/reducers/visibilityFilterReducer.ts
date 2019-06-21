
export interface SetVisibilityFilterAction {
    type: 'SET_VISIBILITY_FILTER';
    payload: string;
  }

export default function visibilityFilterReducer(
    state: string = 'SHOW_ALL',
    action: SetVisibilityFilterAction,
  ) {
    switch (action.type) {
      case 'SET_VISIBILITY_FILTER':
        return action.payload;
  
      default:
        return state;
    }
  }