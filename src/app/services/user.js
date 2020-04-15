import {AppConfig} from '../config/base'
import { resolve } from 'q';
const useCors = true;


export function login (credential, forceJson = false){
    return new Promise((resolve,reject)=>{
        fetch(AppConfig.baseApiUrl('session'), {
            method: 'POST',
            cache: 'no-cache',
            mode: 'cors',
            body: typeof credential === "string" || forceJson ? credential : JSON.stringify({...credential,app:"admin"}),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }).then((response)=>{
            response.json().then((data) => resolve(data));
        }).catch((erro)=>{
            erro.json().then((data) => reject(data));
        })
    })
}
