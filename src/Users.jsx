import { use } from "react";

const Users = ({fetchUsers}) => {
    const users = use(fetchUsers);
    // console.log(users);
    return (
        <div className='users'>
            <h1>Users</h1>
        </div>
    );
};

export default Users;