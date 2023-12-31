import axios from 'axios'
// const DB_URL = 'http://localhost:8888'
const DB_URL = 'https://task-manager-h9qy.onrender.com'


export function tasksave(data) {
    try {
        return axios.post(`${DB_URL}/task`, data)
    } catch (error) {
        console.log(error);
    }

}

export function fetchdata(url) {
    try {
        return axios.get(`${DB_URL}/task/${url}`)
    } catch (error) {
        console.log(error);
    }

}


export function deletetask(id) {
    return axios.delete(`${DB_URL}/task/${id}`)

}


export function markcompleted(id) {
    return axios.put(`${DB_URL}/task/${id}/completed`)

}

export function singledata(id) {
    return axios.get(`${DB_URL}/task/${id}`)
}

export function updatedata(data, id) {
    return axios.put(`${DB_URL}/task/${id}`, data, id)

}

//clear completed task

export function clearcompletedtask() {
    return axios.delete(`${DB_URL}/iscompleted/delete`)
}


// register

export function Register(data) {
    return axios.post(`${DB_URL}/register`, data)

}

// login

export function Login(data) {
    return axios.post(`${DB_URL}/login`, data)

}