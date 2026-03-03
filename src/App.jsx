import './App.css'
import Friend from './Friend';
import ToDo from './Todo'
import User from './User';

function App() {
  // const firends = ['Asif', 'Babul', 'Chandan', 'Rahul', 'Ripon'];

  const users = [
    {id: 1, name: 'Habib', age: 29},
    {id: 2, name: 'Hasan', age: 33},
    {id: 3, name: 'Sarwar', age: 24}
  ]

  return (
    <>
      <h1>React Core Concepts</h1>

      {
        users.map(user => <User key={user.id} user={user}></User>)
      }

    {/* {
      firends.map((friend, idx) => <Friend key={idx} friend={friend}></Friend>)
    } */}


      {/* <Student name='Shamim' age={28}></Student>
      <Sports></Sports>
      <Person></Person>
      <Student name='Habib' age={25}></Student>
      <Student name='Hasan'></Student> */}
      {/* <ToDo task="Learn React" isDone={true}></ToDo>
      <ToDo task="Workout" isDone={false}></ToDo>
      <ToDo task="Have a Bath" isDone={true}></ToDo>
      <ToDo task="Have Meal" isDone={false}></ToDo> */}
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
