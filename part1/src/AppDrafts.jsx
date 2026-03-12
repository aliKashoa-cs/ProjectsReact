//
// const Header = (props) => {
//
//     console.log(props)
//     return <h1>{props.course}</h1>
// }
// const Part = ({part, exercises}) =>(<p>
//     {part} {exercises}
// </p>)
// const Content = ({part1 , exercises1 , part2 ,exercises2 ,part3,exercises3}) => {
//
//     return (
//         <div>
//             <Part part={part1} exercises={exercises1} />
//             <Part part={part2} exercises={exercises2} />
//             <Part part={part3} exercises={exercises3} />
//         </div>
//     )
// }
//
//
// const Total = ({sum})=>(
//     <p>Number of exercises {sum}</p>
// );
//
// const App = () => {
//     const course = 'Half Stack application development'
//     const part1 = {
//         name: 'Fundamentals of React',
//         exercises: 10
//     }
//     const part2 = {
//         name: 'Using props to pass data',
//         exercises: 7
//     }
//     const part3 = {
//         name: 'State of a component',
//         exercises: 14
//     }
//
//     return (
//         <div>
//             <Header course={course} />
//             <Content part1={part1.name} exercises1={part1.exercises} part2={part2.name} exercises2={part2.exercises} exercises3={part3.exercises} part3={part3.name} />
//             <Total sum={part1.exercises + part2.exercises + part3.exercises} />
//         </div>
//     )
// }
// export default App

//
// const App = () => {
//     const course = 'Half Stack application development'
//     const parts = [
//         {
//             name: 'Fundamentals of React',
//             exercises: 10
//         },
//         {
//             name: 'Using props to pass data',
//             exercises: 7
//         },
//         {
//             name: 'State of a component',
//             exercises: 14
//         }
//     ]
//
//     return (
//         <div>
//             <Header course={course} />
//             <Content part1={parts[0].name} exercises1={parts[0].exercises} part2={parts[1].name} exercises2={parts[1].exercises} exercises3={parts[2].exercises} part3={parts[2].name} />
//             <Total sum={parts.reduce((sum, part) => sum + part.exercises, 0)} />
//         </div>
//     )
// }
// export default App