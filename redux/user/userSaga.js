
import { call, put, take } from 'redux-saga/effects'
import { loginSuccess, loginError } from './userActions'

export const ASYNC_LOGIN = 'ASYNC_LOGIN';
export function* asyncLogin(action) {
    try {
        let res = yield call(fakeAuth, action.payload)
        yield put(loginSuccess(res))
    } catch (error) {
        yield put(loginError(error))
    }
};

function fakeAuth(user){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            if (user.email == "joao@gmail.com" && user.senha=="joao123"){
                resolve({
                    name: "Joao Moila",
                    imagem: "https://s3.amazonaws.com/uifaces/faces/twitter/scott_riley/128.jpg",
                    courses: [1,5,6,10]
                })
            }else{
                // reject('email ou senha incorreto')
                reject(user);
            }
        }, 400);
    })
}
