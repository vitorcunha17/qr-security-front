export function getAllUsersRequest() {
  return {
    type: '@called/GET_ALLUSERS_REQUEST',
  }
}

export function getAllUsersSuccess(Users) {
  return {
    type: '@called/GET_ALLUSERS_SUCCESS',
    payload: Users
  }
}

export function getAllUsersFailure() {
  return {
    type: '@called/GET_ALLUSERS_FAILURE'
  }
}

export function allCalledRequest(start, end) {
  return {
    type: '@called/ALL_CALLED_REQUEST',
    payload: {start, end}
  }
}

export function allCalledSuccess(calleds) {
  return {
    type: '@called/ALL_CALLED_SUCCESS',
    payload: { calleds },
  }
}

export function allCalledFailure() {
  return {
    type: '@called/ALL_CALLED_FAILURE'
  }
}

export function addCalledRequest(data) {
  return {
    type: '@called/ADDCALLED_REQUEST',
    payload: { data },
  }
}

export function addCalledSuccess() {
  return {
    type: '@called/ADDCALLED_SUCCESS',
  }
}

export function addCalledFailure() {
  return {
    type: '@called/ADDCALLED_FAILURE'
  }
}

export function getCalledByIdRequest(id) {
  return{
    type: '@called/CALLED_BYID_REQUEST',
    payload: { id },
  }
}

export function getCalledByIdSuccess(data){
  return{
    type: '@called/CALLED_BYID_SUCCESS',
    payload: { data }
  }
}

export function getCalledByIdFailure(){
  return{
    type: '@called/CALLED_BYID_FAILURE'
  }
}

export function updateCalledRequest( id, data ) {
  return{
    type: '@called/CALLED_UPDATE_REQUEST',
    payload: { id, data }
  }
}

export function updateCalledSuccess(){
  return{
    type:'@called/CALLED_UPDATE_SUCCESS'
  }
}

export function updateCalledFailure() {
  return{
    type: '@called/CALLED_UPDATE_FAILURE'
  }
}

export function updateCalledStatusRequest( id, data ) {
  return{
    type: '@called/CALLED_UPDATE_STATUS_REQUEST',
    payload: { id, data }
  }
}

export function updateCalledStatusSuccess(){
  return{
    type:'@called/CALLED_UPDATE_STATUS_SUCCESS'
  }
}

export function updateCalledStatusFailure() {
  return{
    type: '@called/CALLED_UPDATE_STATUS_FAILURE'
  }
}