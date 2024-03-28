const Filter = ({setSearchData}) => {
    return <p>filter shown with <input onChange={(e) => setSearchData(e.target.value)} /></p>
}

export default Filter