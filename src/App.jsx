import './App.css'
import ToDo from './Todo'

function App() {
  return (
    <>
      <h1>React Core Concepts</h1>
      {/* <Student name='Shamim' age={28}></Student>
      <Sports></Sports>
      <Person></Person>
      <Student name='Habib' age={25}></Student>
      <Student name='Hasan'></Student> */}
      <ToDo task="Learn React" isDone={true}></ToDo>
      <ToDo task="Workout" isDone={false}></ToDo>
      <ToDo task="Have a Bath" isDone={true}></ToDo>
      <ToDo task="Have Meal" isDone={false}></ToDo>
    </>
  )
}

function Student({name, age=18}) {
  return (
    <div className="student">
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  )
}

function Sports() {
  const sportsStyle = {
    color: "red",
    backgroundColor: 'yellow'
  }
  return (
    <div style={sportsStyle}>
      <h2>Let's play</h2>
      <ul>
        <li>Asif</li>
        <li>Rabbi</li>
        <li>Habib</li>
      </ul>
    </div>
  )
}

function Person () {
  const age = 17;
  const name = 'Jahidul';
  return (
    <p style={{backgroundColor: "red"}}>I am {name}. Age: {age}</p>
  )
}

export default App
