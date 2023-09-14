import axios from 'axios';



const apicall = {
   
    signUp: function (payload) {
        return new Promise((resolve, reject) => {
            let options = {
                method: 'POST',
                url: 'http://localhost:8080/api/user/create',
                headers: { 'Content-Type': 'application/json' },
                data: payload
            }
            axios(options)
                .then(res => {
                    resolve(res)
                })
                .catch(err => {
                    reject(err)
                })
        })
    },


    userLigin: function (payload) {
        return new Promise((resolve, reject) => {
            let options = {
                method: 'POST',
                url: 'http://localhost:8080/api/user/user-login',
                headers: { 'Content-Type': 'application/json' },
                data: payload
            }
            axios(options)
                .then(res => {
                    resolve(res)
                })
                .catch(err => {
                    reject(err)
                })
        })
    },
    
    forgetPasswordUpdate: function (payload, recoverId) {
        return new Promise((resolve, reject) => {
            let options = {
                method: 'POST',
                url: host + '/api/auth/passwordUpdate/' + recoverId,
                headers: { 'Content-Type': 'application/json' },
                data: payload
            }
            axios(options)
                .then(res => {
                    resolve(res)
                })
                .catch(err => {
                    reject(err)
                })
        })
    },
    
}

export default apicall;
