import React, { useEffect } from 'react';
import { useState } from 'react';
const PainDisease = (props) => 
{
    const[user,setUser]=useState([])
    const userData=[
    {name:"Muscle Pain"},
    {name:"Back Pain"},
    {name:"Neck Pain"},
    {name:"Hib Joint Pain"},
    {name:"Belly Pain"},]

    useEffect(()=>{
    setUser(userData);
    },[]);

  return (
    <>
    {user.map((user)=>(
        <label class="checkContainer">{user.name}
        <input type="checkbox" name={user.name} onChange={(e) =>{props.handleChangePain(e.target.checked,user.name)}}/>
        <span class="checkmark"></span>
    </label>
    ))}
    </>
  );
}

export default PainDisease;