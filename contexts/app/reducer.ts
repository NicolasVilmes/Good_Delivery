import {DataType, actionType, Actions} from './types'

export const reducer = (state: DataType, action: actionType) => {
  switch (action.type) {
    case Actions.SET_TENANT:
      return { ...state, tenant: action.payload.tenant };
    default: return state;
  }
}

