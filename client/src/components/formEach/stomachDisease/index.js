import React, { useEffect } from 'react';
import { useState } from 'react';
const StomachDisease = (props) => 
{
    const[user,setUser]=useState([])
    const userData=[
    {name:"Swelling Of Stomach"},
    {name:"Indigestion"},
    {name:"Diarrhoea"},
    {name:"Constipation"},
    {name:"Stomach Bleeding"},]

    useEffect(()=>{
    setUser(userData);
    },[]);

  return (
    <>
    {user.map((user)=>(
        <label class="checkContainer">{user.name}
        <input type="checkbox" onChange={(e) =>{props.handleChangeStomach(e.target.checked,user.name)}}/>
        <span class="checkmark"></span>
    </label>
    ))}
    </>
  );
}

export default StomachDisease;