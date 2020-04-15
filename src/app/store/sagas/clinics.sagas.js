import { takeLatest, call, put, all } from 'redux-saga/effects';
import {
  getAllStatesSuccess,
  getAllStatesFailure,
  getClinicWimSuccess,
  getClinicWimFailure,
  updateClinicWimSuccess,
  updateClinicWimFailure,
  getUsersClinicSuccess,
  getUsersClinicFailure,
  destroyClinicSuccess,
  destroyClinicFailure,
  verifyPasswordSuccess, 
  verifyPasswordFailure,
  releaseAccessSuccess,
  releaseAccessFailure,
} from '../actions/clinics.actions';
import api from '../../services/axios';
import { toast } from 'react-toastify';

export function* getAllStates() {
  try {
    const { data } = yield call(api.get, '/clinics-all');
    
    yield put(
      getAllStatesSuccess(
        data.clinicsInactives, 
        data.allClinics, 
        data.clinicsActives
      ));

  } catch(err) {
    toast.error('Falha ao consultar os dados, tente mais tarde');
    yield put(getAllStatesFailure())
  }
}

export function* getClinicWim({ payload }) {
  try {
    const { data } = yield call(api.get, `/clinic/${payload}`);
    
    yield put(getClinicWimSuccess(data));

  } catch(err) {
    toast.error('Falha ao consultar os dados, tente mais tarde');
    yield put(getClinicWimFailure())
  }
}

export function* updateClinicWim({ payload }) {
  try {    

    const { data } = yield call(api.put, `/clinic-wim/${payload.id}`, payload.data);
    
    yield put(updateClinicWimSuccess(data.clinic));
    
    toast.success('Clínica atualizada com sucesso!');
  } catch(err) {
    toast.error('Ocorreu um erro ao atualizar a clínica' + err.message);
    yield put(updateClinicWimFailure())
  }
}

export function* getUsersFromClinic({ payload }) {
  try {
    const { data } = yield call(api.get, `/clinic/${payload}/users`);
    
    yield put(getUsersClinicSuccess(data.users));

  } catch(err) {
    toast.error('Falha ao consultar os dados, tente mais tarde');
    yield put(getUsersClinicFailure())
  }
}

export function* destroyClinic({ payload }){
  try {
    yield call(api.delete, `/clinics/destroy/${payload.id}`);
    yield put(destroyClinicSuccess());

  } catch(err) {
    toast.error('Falha ao apagar o usuário, tente mais tarde!');
    yield put(destroyClinicFailure());
  }
}

export function* verifyPassword({ payload }){
  try {
    const { data } = yield call(api.post, `/verify-password`, { password: payload.password });
    
    yield put(verifyPasswordSuccess(data.message));

  } catch(err) {
    toast.error('Falha ao verificar senha, tente mais tarde!');
    yield put(verifyPasswordFailure());
  }
}

export function* releaseAccess({ payload }){
  try {
    const { data } = yield call(api.put, `/clinics/extends-access/${payload.id}`);
    
    yield put(releaseAccessSuccess(data.message));

  } catch(err) {
    toast.error('Falha ao verificar senha, tente mais tarde!');
    yield put(releaseAccessFailure());
  }
}

export default all([
  takeLatest('@clinics/GET_ALL_STATES_REQUEST', getAllStates),
  takeLatest('@clinics/GET_CLINIC_WIM_REQUEST', getClinicWim),
  takeLatest('@clinics/UPDATE_CLINIC_WIM_REQUEST', updateClinicWim),
  takeLatest('@clinics/GET_USERS_CLINIC_REQUEST', getUsersFromClinic),
  takeLatest('@clinics/DESTROY_CLINIC_REQUEST', destroyClinic),
  takeLatest('@clinics/VERIFY_PASSWORD_REQUEST', verifyPassword),
  takeLatest('@clinics/RELEASE_ACCESS_REQUEST', releaseAccess),
])