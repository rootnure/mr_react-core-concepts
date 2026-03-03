import './User.css';

const User = ({user}) => {
    const {name, age} = user;
    return (
        <div className='user'>
            <p>Name: {name}</p>
            <p style={age >=18 ? {color: 'green'} : {color: 'red'}}>Age: {age}</p>
        </div>
    );
};

export default User;