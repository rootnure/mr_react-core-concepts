// function Todo({task, isDone}) {
//     return(
//         <ul>
//             <li>Task: {task}. Completed: {isDone ? "YES": "NO"}.</li>
//         </ul>
//     )
// }

// function ToDo({task, isDone}){
//     if(isDone) return <li style={{color: "yellow"}}>Done: {task}</li>
//     return <li style={{color: "red"}}>Do Now: {task}</li>
// }

// function ToDo({task, isDone}){
//     return isDone ?
//     <li style={{color: "yellow"}}>Done: {task}</li> :
//     <li style={{color: "red"}}>Do Now: {task}</li>
// }

// function ToDo({task, isDone}){
//     // return isDone && <li style={{color: "yellow"}}>Done: {task}</li>
//     return isDone || <li style={{color: "red"}}>Do Now: {task}</li>
// }

function ToDo({task, isDone}){
    let result;
    isDone ? result = <li style={{color: "yellow"}}>Done: {task}</li> :
    result = <li style={{color: "red"}}>Do Now: {task}</li>
    return result;
}

export default ToDo