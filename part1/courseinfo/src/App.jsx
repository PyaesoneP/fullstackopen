const Header = (props) => {
  console.log(props);
  return(
    <>
    <p>
      {props.course}
    </p>
    </>
  )
}

const Content = (props) => {
  console.log(props);
  return(
    <>
    <Part name = {props.part1} number = {props.exercises1} />
    <Part name = {props.part2} number = {props.exercise2} />
    <Part name = {props.part3} number = {props.exercise3} />
    </>
  )
}

const Part = (props) => {
  console.log(props);
  return(
    <>
    <p>
      {props.name} {props.number}
    </p>
    </>
  )
}

const Total = (props) => {
  console.log(props);
  return(
    <>
    <p>Number of exercises {props.exercise1 + props.exercise2 + props.exercise3}</p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course = {course} />
      <Content part1 = {part1} exercise1 = {exercises1} part2 = {part2} exercise2 = {exercises2} part3 = {part3} exercise3 = {exercises3} />
      <Total exercise1 = {exercises1} exercise2 = {exercises2} exercise3 = {exercises3} />
    </div>
  )
}

export default App