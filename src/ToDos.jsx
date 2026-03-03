import { use } from "react";

const ToDos = ({todosPromise}) => {
    const todos = use(todosPromise);
    console.log(todos);
    return (
        <div>
            <h1>ToDos</h1>
        </div>
    );
};

export default ToDos;