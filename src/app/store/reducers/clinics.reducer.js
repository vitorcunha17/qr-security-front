const INITIAL_STATE = {
  allClinics: [],
  loading: false,
  allClinicsInactive: [],
  allStates: [],
  clinicWim: {},
  clinicUpdate: {},
  usersFromClinic: [],
  verification: '',
  releaseAccess: '',
}

export default function clinics(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@clinics/GET_ALL_STATES_REQUEST':
      return { ...state, loading: true };
    case '@clinics/GET_ALL_STATES_SUCCESS':
      return { ...state, 
        allStates: action.payload.allClinics, 
        allClinics: action.payload.clinicsActives,
        allClinicsInactive: action.payload.clinicsInactives,
        loading: false }
    case '@clinics/GET_ALL_STATES_FAILURE':
      return { ...state, loading: false };
    case '@clinics/GET_CLINIC_WIM_REQUEST':
      return { ...state, loading: true };
    case '@clinics/GET_CLINIC_WIM_SUCCESS':
      return { ...state, clinicWim: action.payload, loading: false }
    case '@clinics/GET_CLINIC_WIM_FAILURE':
      return { ...state, loading: false };
    case '@clinics/GET_USERS_CLINIC_REQUEST':
      return { ...state, loading: true };
    case '@clinics/GET_USERS_CLINIC_SUCCESS':
      return { ...state, usersFromClinic: action.payload, loading: false }
    case '@clinics/GET_USERS_CLINIC_FAILURE':
      return { ...state, loading: false };
    case '@clinics/UPDATE_CLINIC_WIM_REQUEST':
      return { ...state, loading: true };
    case '@clinics/UPDATE_CLINIC_WIM_SUCCESS':
      return { ...state, clinicUpdate: action.payload, loading: false }
    case '@clinics/UPDATE_CLINIC_WIM_FAILURE':
      return { ...state, loading: false };
    case '@clinics/DESTROY_CLINIC_REQUEST':
      return { ...state, loading: true };
    case '@clinics/DESTROY_CLINIC_SUCCESS':
      return { ...state, loading: false }
    case '@clinics/DESTROY_CLINIC_FAILURE':
      return { ...state, loading: false };
    case '@clinics/VERIFY_PASSWORD_REQUEST':
      return { ...state, loading: true };
    case '@clinics/VERIFY_PASSWORD_SUCCESS':
      return { ...state, verification: action.payload, loading: false }
    case '@clinics/VERIFY_PASSWORD_FAILURE':
      return { ...state, loading: false };
    case '@clinics/CLEAR_VERIFY':
      return { ...state, verification: '', loading: false };
    case '@clinics/RELEASE_ACCESS_REQUEST':
      return { ...state, loading: true };
    case '@clinics/RELEASE_ACCESS_SUCCESS':
      return { ...state, releaseAccess: action.payload, loading: false }
    case '@clinics/RELEASE_ACCESS_FAILURE':
      return { ...state, loading: false };
    default:
      return state;
  }
}
