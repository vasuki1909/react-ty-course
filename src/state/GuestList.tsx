import { useState } from "react";

const GuestList: React.FC = () =>{
    const [name, setName] =  useState('');
    const [guestsList, setGuestsList] = useState<string[]>([]);
    const submitHandler = ()=>{
        setName('');
        setGuestsList([...guestsList,name])
        guestsList.forEach(element => {
            console.log(element)
        });
    }
return <div>
    <h3>Guest List:</h3>
    <ul>
        {guestsList.map(guest => <li>{guest}</li>)}
    </ul>
    <input value={name} onChange={(e)=> setName(e.target.value)}></input>
    <button onClick={submitHandler}>Add Guests</button>
</div>
};
export default GuestList;