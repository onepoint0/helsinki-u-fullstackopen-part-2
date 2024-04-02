const Header = ({heading}) => <h2>{heading}</h2>

const Part = ({name,exercises}) => <p>{name} {exercises}</p>

const Course = ({course}) => {
    const total = course.parts.reduce((s,p) => s + p.exercises,0)
    return (
      <>
        <Header heading={course.name} /> 
        { course.parts.map( c => <Part key={c.id} name={c.name} exercises={c.exercises} />)}
        <p><b>total of {total} exercises</b></p>
      </>
    )
}

export default Course
