import React, { useEffect } from 'react';
import { useState } from 'react';
const BrainDisease = (props) => 
{
    const[user,setUser]=useState([])
    const userData=[
    {name:"Depression"},
    {name:"Altered Sensorium"},
    {name:"Lack Of Concentration"},
    {name:"Unsteadiness"},]
    useEffect(()=>{
    setUser(userData);
    },[]);

  return (
    <>
    {user.map((user)=>(
        <label class="checkContainer">{user.name}
        <input type="checkbox" name={user.name} onChange={(e) =>{props.handleChangeBrain(e.target.checked,user.name)}}/>
        <span class="checkmark"></span>
    </label>
    ))}
    </>
  );
}

export default BrainDisease;