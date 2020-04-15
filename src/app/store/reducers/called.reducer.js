const INITIAL_STATE = {
  loading: false,
  called: {},
  users: [],
  allCalleds: [{}],
  calledById: null
}

export default function called(state = INITIAL_STATE, action) {
  switch(action.type) {
      case '@called/GET_ALLUSERS_REQUEST':
        return { ...state, loading: true };
      case '@called/GET_ALLUSERS_SUCCESS':
        return { ...state, users: action.payload, loading: false }
      case '@called/GET_ALLUSERS_FAILURE':
        return { ...state, loading: false };
      case '@called/ADDCALLED_REQUEST':
        return { ...state, loading: true };
      case '@called/ADDCALLED_SUCCESS':
        return { ...state, loading: false }
      case '@called/ADDCALLED_FAILURE':
        return { ...state, loading: false };
      case '@called/ALL_CALLED_REQUEST':
        return { ...state, loading: true }
      case '@called/ALL_CALLED_SUCCESS':
        return { ...state, allCalleds: action.payload, loading: false }
      case '@called/ALL_CALLED_FAILURE':
        return { ...state, loading: false }
      case '@called/CALLED_BYID_REQUEST':
        return { ...state, loading: true}
      case '@called/CALLED_BYID_SUCCESS':
        return { ...state, calledById: action.payload, loading: false}
      case '@called/CALLED_BYID_FAILURE':
        return { ...state, loading: false}
      case '@called/CALLED_UPDATE_REQUEST':
        return { ...state, loading: true}
      case '@@called/CALLED_UPDATE_SUCCESS':
        return { ...state, loading: false}
      case '@called/CALLED_UPDATE_FAILURE':
        return { ...state, loading: false}
      case '@called/CALLED_UPDATE_STATUS_REQUEST':
        return { ...state, loading: true}
      case '@called/CALLED_UPDATE_STATUS_SUCCESS':
        return { ...state, loading: false}
      case '@called/CALLED_UPDATE_STATUS_FAILURE':
        return { ...state, loading: false}
    default:
      return state;
  }
}
