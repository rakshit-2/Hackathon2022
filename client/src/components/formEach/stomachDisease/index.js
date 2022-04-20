import React, { useEffect } from 'react';
import { useState } from 'react';
const StomachDisease = (props) => 
{
    const[checked,setChecked]=useState(false)
    const[user,setUser]=useState([])
    const userData=[
    {name:"Diarrhoea"},
    {name:"Consitpation"},
    {name:"Stomach Bleeding"},
    {name:"Yellowing Eyes"},
    {name:"Nausea"},]

    useEffect(()=>{
    setUser(userData);
    },[]);

  return (
    <>
    {user.map((user)=>(
        <label class="checkContainer">{user.name}
        <input type="checkbox" name={"stomachCheckbox"} value={user.name} onChange={(e) =>{props.handleChangeStomach(e.target.checked,user.name)}}/>
        <span class="checkmark"></span>
    </label>
    ))}
    </>
  );
}

export default StomachDisease;