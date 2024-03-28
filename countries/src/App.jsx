import { useState,useEffect } from 'react'
import axios from 'axios'
import Country from './components/Country'

function App() {
  const [countries,setCountries] = useState([])
  const [country,setCountry] = useState('')

  useEffect(() => {
    axios.get('https://studies.cs.helsinki.fi/restcountries/api/all')
    .then((res) => {
      console.log('axios ',res.data)
      setCountries(res.data)
    })
  },[])

  const countriesToShow = countries.filter( c => c.name.common.toLowerCase().search(country.toLowerCase()) > -1)

  return (
    <div>

      <div>filter: <input onChange={(e) => setCountry(e.target.value)} value={country}/></div>
      { countriesToShow.length > 1 &&
        <>
          <ul>
            { countriesToShow.length <= 10 && countriesToShow.length > 1 ?
                countriesToShow.map( c => <li key={c.cca2}>{c.name.common} <button onClick={() => setCountry(c.name.common)}>show</button></li>) :
                'too many matches, specify another filter' } 
          </ul> 
        </>
      }
      
      { countriesToShow.length === 1 && <Country country={countriesToShow[0]}/>}

    </div>
  )
}

export default App

