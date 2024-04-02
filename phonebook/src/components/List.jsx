const List = ({filteredPersons,handleDelete}) => {
    return  <ul>{ filteredPersons.map( p => <li className="listrow" key={p.id}>{p.name} {p.number} <button onClick={() => handleDelete(p)}>delete</button></li>)}</ul>
}
export default List