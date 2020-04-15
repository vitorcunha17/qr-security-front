export function getAllStatesRequest() {
  return {
    type: '@clinics/GET_ALL_STATES_REQUEST'
  }
}

export function getAllStatesSuccess(clinicsInactives, allClinics, clinicsActives) {
  return {
    type: '@clinics/GET_ALL_STATES_SUCCESS',
    payload: {
      clinicsInactives, 
      allClinics, 
      clinicsActives
    }
  }
}

export function getAllStatesFailure() {
  return {
    type: '@clinics/GET_ALL_STATES_FAILURE'
  }
}

export function getClinicWimRequest(id) {
  return {
    type: '@clinics/GET_CLINIC_WIM_REQUEST',
    payload: id,
  }
}

export function getClinicWimSuccess(clinic) {
  return {
    type: '@clinics/GET_CLINIC_WIM_SUCCESS',
    payload: clinic
  }
}

export function getClinicWimFailure() {
  return {
    type: '@clinics/GET_CLINIC_WIM_FAILURE'
  }
}

export function updateClinicWimRequest(data, id) {
  return {
    type: '@clinics/UPDATE_CLINIC_WIM_REQUEST',
    payload: { data, id },
  }
}

export function updateClinicWimSuccess(clinic) {
  return {
    type: '@clinics/UPDATE_CLINIC_WIM_SUCCESS',
    payload: clinic
  }
}

export function updateClinicWimFailure() {
  return {
    type: '@clinics/UPDATE_CLINIC_WIM_FAILURE'
  }
}

export function getUsersClinicRequest(id) {
  return {
    type: '@clinics/GET_USERS_CLINIC_REQUEST',
    payload: id,
  }
}

export function getUsersClinicSuccess(users) {
  return {
    type: '@clinics/GET_USERS_CLINIC_SUCCESS',
    payload: users
  }
}

export function getUsersClinicFailure() {
  return {
    type: '@clinics/GET_USERS_CLINIC_FAILURE'
  }
}

export function destroyClinicRequest(id) {
  return {
    type: '@clinics/DESTROY_CLINIC_REQUEST',
    payload: { id },
  }
}

export function destroyClinicSuccess() {
  return {
    type: '@clinics/DESTROY_CLINIC_SUCCESS',
  }
}

export function destroyClinicFailure() {
  return {
    type: '@clinics/DESTROY_CLINIC_FAILURE',
  }
}


export function verifyPasswordRequest(password) {
  return {
    type: '@clinics/VERIFY_PASSWORD_REQUEST',
    payload: { password },
  }
}

export function verifyPasswordSuccess(message) {
  return {
    type: '@clinics/VERIFY_PASSWORD_SUCCESS',
    payload: message,
  }
}

export function verifyPasswordFailure() {
  return {
    type: '@clinics/VERIFY_PASSWORD_FAILURE',
  }
}

export function clearVerify() {
  return {
    type: '@clinics/CLEAR_VERIFY',
  }
}

export function releaseAccessRequest(id) {
  return {
    type: '@clinics/RELEASE_ACCESS_REQUEST',
    payload: { id },
  }
}

export function releaseAccessSuccess(message) {
  return {
    type: '@clinics/RELEASE_ACCESS_SUCCESS',
    payload: message,
  }
}

export function releaseAccessFailure() {
  return {
    type: '@clinics/RELEASE_ACCESS_FAILURE',
  }
}