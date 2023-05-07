import { useState } from "react";

const users = [
    { name: 'Sarah', age: 20 },
    { name: 'Alex', age: 20 },
    { name: 'Michael', age: 20 },
  ];
const UserSearch: React.FC = () =>{
    const[searchUser, setSearchUser] = useState('');
    const[printUser, setPrintUser] = useState<undefined| {name: string, age: number}>()

    const submitHandler = ()=>{
        setSearchUser('')
        const findUser = users.find(
            (i) =>{ return (i.name === searchUser);})
        setPrintUser(findUser)
    }
return <div>
    <h3>User Search</h3>
    <input value={searchUser} onChange={(e)=> setSearchUser(e.target.value)}></input>
   <button onClick={submitHandler}>Find Users</button>
    <div>
        {printUser?.name}
        {printUser?.age}
    </div>
</div>
};
export default UserSearch;