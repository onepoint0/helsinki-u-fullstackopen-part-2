const Country = ({country}) => {
    console.log('country = ', country)
    console.log(Object.keys(country.languages)) 
    return (
        <>
            {/* <h1>{country.name.common}</h1> */}
            <p>Captial:{country.capital[0]}</p>
            <p>Area:{country.area}</p>
            <h2>languages</h2>
            <ul>
                { Object.entries(country.languages).map(lang => <li key={lang[0]}>{lang[1]}</li>)}
            </ul>
            <img src={country.flags.svg} width="300"/>
        </>
    )

}
export default Country