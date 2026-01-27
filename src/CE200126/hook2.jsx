import React,{useState} from "react";

export default function Hook2Example(){
    const [user,setUser] = useState({
        name:"Guest",
        age:25,
        ce:true,
        city:"morbi",
    });

    return(
        <>
        <input type="text" value={user.name} onChange={(e)=>setUser({...user,name:e.target.value})} />
        <br />
        <input type="text" value={user.age} onChange={(e)=>setUser({...user,age:e.target.value})} />
        <br />
        <input type="text" value={user.city} onChange={(e)=>setUser({...user,city:e.target.value})} />
        <br />
        <label>CE</label>
        <input type="checkbox" checked={user.ce} onChange={(e)=>setUser({...user,ce:e.target.checked})} />

        <h1>{user.name} is {user.age} years old and lives in {user.city}.</h1>

        </>
    );
}