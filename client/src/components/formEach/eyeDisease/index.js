import React, { useEffect } from 'react';
import { useState } from 'react';
const EyeDisease = (props) => 
{
    const[user,setUser]=useState([])
    const userData=[
    {name:"Redness Of Eyes"},
    {name:"Watering From Eyes"}]
    useEffect(()=>{
    setUser(userData);
    },[]);

  return (
    <>
    {user.map((user)=>(
        <label class="checkContainer">{user.name}
        <input type="checkbox" name={user.name} onChange={(e) =>{props.handleChangeEyes(e.target.checked,user.name)}}/>
        <span class="checkmark"></span>
    </label>
    ))}
    </>
  );
}

export default EyeDisease;