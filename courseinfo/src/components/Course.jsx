const Course = ({course}) => {
    const total = course.parts.reduce((s,p) => s + p.exercises,0)
    return (
      <>
        <h2>{course.name}</h2>
        { course.parts.map( c => <p key={c.id}> {c.name} {c.exercises} </p>)}
        <p><b>total of {total} exercises</b></p>
      </>
    )
}

export default Course
