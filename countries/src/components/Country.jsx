import axios from "axios"
import { useState } from "react"

const Country = ({country}) => {
    console.log('country = ', country)
    console.log(Object.keys(country.languages)) 
    const [temperature,setTemperature] = useState ()
    const [wind,setWind] = useState ()
    
    // const weather = (lat,long) => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${country.latlng[0]}&lon=${country.latlng[1]}&units=metric&appid=9307d3d00207499c27f24b12ac124fe7`)
        .then( res => {
            console.log('got weather ',res.data)
            setTemperature(res.data.main.temp)
            setWind(res.data.wind.speed)
        }).catch( err => {
            console.log('weather error ',err)
        })
    // } 

    return (
        <>
            {/* <h1>{country.name.common}</h1> */}
            <p>Captial:{country.capital[0]}</p>
            <p>Area:{country.area}</p>
            <h2>languages</h2>
            <ul>
                { Object.entries(country.languages).map(lang => <li key={lang[0]}>{lang[1]}</li>)}
            </ul>
            {/* <img src={country.flags.svg} width="300"/> */}
            <div>
                <p>temperature: {temperature}</p>

                <p>wind {wind}</p> 

            </div>
        </>
    )

}
export default Country