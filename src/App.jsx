import { Suspense } from 'react';
import './App.css'
import Counter from './Counter';
import Friend from './Friend';
import LoadAPIData from './LoadAPIData';
import Player from './Player';
import ToDo from './Todo'
import User from './User';
import Users from './Users';
import ToDos from './ToDos';
import Posts from './Posts';



// const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json());

// const fetchTodos = fetch("https://jsonplaceholder.typicode.com/todos").then(res => res.json())

// const fetchTodos = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/todos");
//   return res.json();
// }

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
}

function App() {
  // function handleClick() {
  //   console.log('clicked');
  // }

  // const handleClick3  = ()=> {
  //   console.log("clicked 3");
  // }

  // const handleClick5 = num => {
  //   console.log(num);
  // }


  // const firends = ['Asif', 'Babul', 'Chandan', 'Rahul', 'Ripon'];

  // const users = [
  //   {id: 1, name: 'Habib', age: 29},
  //   {id: 2, name: 'Hasan', age: 33},
  //   {id: 3, name: 'Sarwar', age: 24}
  // ]

  // const todosPromise = fetchTodos();

  const postsPromise = fetchPosts();

  return (
    <>
      <h3>React Core Concepts Part 2</h3>

      <Suspense fallback={<h3>Posts Loading...</h3>}>
        <Posts postsPromise={postsPromise}></Posts>
      </Suspense>

      {/* <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense> */}

      {/* <Suspense fallback={<h3>Todos Loading...</h3>}>
        <ToDos todosPromise={todosPromise}></ToDos>
      </Suspense> */}

      {/* <LoadAPIData></LoadAPIData> */}

      {/* <Player></Player>

      <Counter></Counter>

      <button onClick={handleClick}>Click Me</button>
      <button onClick={function (){console.log("clicked 2")}}>Click Me 2</button>
      <button onClick={handleClick3}>Click Me 3</button>
      <button onClick={() => console.log('clicked 4')}>Click Me 4</button>
      <button onClick={() => handleClick5(5)}>Click Me 5</button> */}

      {/* {
        users.map(user => <User key={user.id} user={user}></User>)
      } */}

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
