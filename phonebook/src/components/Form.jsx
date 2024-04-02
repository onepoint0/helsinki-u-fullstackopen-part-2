const Form = ({handleSubmit,newName,setNewName,newNumber,setNewNumber}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className="row"><label>name:</label> <input onChange={(e) => setNewName(e.target.value)} value={newName} /></div>
            <div className="row"><label>number:</label> <input onChange={(e) => setNewNumber(e.target.value)} value={newNumber} /></div>
            <div className="row"><button type="submit">add</button></div>
        </form>
    )
}
export default Form