import { useEffect, useState } from 'react'
import Form from "./components/Form"
import Filter from "./components/Filter"
import List from './components/List'
import Message from './components/Message'
import {getAll,create,update,deleteEntry} from './services/persons'

const App = () => {
  useEffect(() =>{
    getAll()
      .then(res =>{
        // console.log('USE EFFECT: phonebook = ',res);
        setPersons(res);
      })
      .catch( err => {
        console.log('phonebook currently unavailable')
      })
  },[])

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchData,setSearchData] = useState('')
  const [message,setMessage] = useState([])

  const filteredPersons =  persons.filter(p => p.name.toLowerCase().search(searchData.toLowerCase()) > -1 )

  const handleSubmit = (e) => {
    e.preventDefault();

    const duplicate = persons.find( p => p.name === newName.trim())

    if ( duplicate ) {
      if (window.confirm(`${newName} is already in the phonebook. Replace old number with the new one?`)) {
        // console.log('in update ',duplicate)
        const newEntry = {...duplicate,number: newNumber}
        update(newEntry)
          .then( res => {
            // console.log('number updated ',res)
            setPersons( persons.map( p => p.id !== newEntry.id ? p : newEntry))
            notification(`Number for ${newEntry.name} has been updated to ${newEntry.number}`)
          })
      }
    } else {
      create({name: newName, number: newNumber})
        .then(res =>{
          // console.log('res = ',res);
          setPersons(persons.concat({id: res.id,name: res.name, number: res.number}))
          notification(`${newName} has been added to the phonebook.`)
        })

    }

    setNewName('')
    setNewNumber('')
  }

  const handleDelete = (person) => {

    if (window.confirm(`Delete ${person.name}?`)) {
      deleteEntry(person.id)
        .then( res => {
          setPersons( persons.filter( p => p.id != person.id))
          notification(`${person.name} has been removed from the phonebook.`)
        }).catch( err =>{
          setPersons( persons.filter( p => p.id != person.id))
          notification(`Information of ${person.name} was already removed from the phonebook.`,'error')
        })

    }
  }

  const notification = (message,type='success') => {
    setMessage([message,type])
    setTimeout(() => {
      setMessage([null,null])
    },5000)
  } 

  return (
    <div>

      <h2>Phonebook</h2>
      <Message message={message} />
      <Filter setSearchData={setSearchData} />

      <h2>Add a new number</h2>
      <Form 
        handleSubmit={handleSubmit}
        setNewName={setNewName}
        newName={newName}
        setNewNumber={setNewNumber}
        newNumber={newNumber}
      />

      <h2>Numbers</h2>
      <List filteredPersons={filteredPersons} handleDelete={handleDelete} />

    </div>
  )
}

export default App