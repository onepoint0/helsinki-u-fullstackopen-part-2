import axios from 'axios';

// const baseURL = 'http://localhost:3001/api/persons'; 
const baseURL = '/api/persons'; 

const getAll = () => {
    console.log('SERVICE: getting phonebook')
    return axios
            .get(baseURL)
            .then( res => res.data )
}

const create = (person) => {
    console.log('SERVICE: creating new entry ',person)
    return axios
            .post(baseURL,person)
            .then( res => res.data)
}


const update = (person) => {
    console.log('SERVICE: updating entry ',person)
    return axios
            .put(`${baseURL}/${person.id}`,person)
            .then( res => res.data)
}

const deleteEntry = (id) => {
    console.log('SERVICE: deleting entry ',id)
    return axios
            .delete(`${baseURL}/${id}`)
            .then( res => res.data)
}

export { getAll, create, update, deleteEntry }