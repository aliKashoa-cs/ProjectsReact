const Header = ({title}) => (<h1>{title}</h1>)
const Content = ({content}) => {
    const sum = content.reduce((acc, cur) => acc + cur.exercises, 0);
    return (
        <div>
            {content.map(part =>
                <Part key={part.id} name={part.name} exercises={part.exercises}/>)
            }
            <b>total of {sum} exercises</b>
        </div>
    );

}

const Part = ({name, exercises}) => {

    return <p>{name} {exercises}</p>

}
const Course = ({course}) => {


    return (
        <div>
            <Header title={course.name}/>
            <Content content={course.parts}/>
        </div>
    )
}
export default Course;