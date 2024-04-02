import axios from "axios"
import { useState } from "react"

const Country = ({country}) => {
    const [temperature,setTemperature] = useState ()
    const [wind,setWind] = useState ()
    const [icon,setIcon] =useState()
    const api_key = import.meta.env.VITE_WEATHER_KEY
    
    if (api_key) {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${country.latlng[0]}&lon=${country.latlng[1]}&units=metric&appid=${api_key}`)
        .then( res => {
            // console.log('got weather ',res.data)
            setTemperature(res.data.main.temp)
            setWind(res.data.wind.speed)
            setIcon(`https://openweathermap.org/img/wn/${res.data.weather[0].icon}@2x.png`)
        }).catch( err => {
            console.log('weather error ',err)
        })
    
    }

    return (
        <>
            <h1>{country.name.common}</h1>
            <p>captial {country.capital[0]}</p>
            <p>area {country.area}</p>
            <h2>languages:</h2>
            <ul>
                { Object.entries(country.languages).map(lang => <li key={lang[0]}>{lang[1]}</li>)}
            </ul>
            <img src={country.flags.svg} width="200"/>
            <div>
                <h2>Weather in {country.name.common}</h2>
                { temperature ? <p>temperature {temperature}</p> : <p>temperature currently unavailable</p>}

                {icon && <img src={icon}/>}

                { wind ? <p>wind {wind} m/s</p> : <p>wind speed currently unavailable </p>}

            </div>
        </>
    )

}
export default Country