import React, { useEffect } from 'react';
import { useState } from 'react';
const GenitalDisease = (props) => 
{
    const[user,setUser]=useState([])
    const userData=[
    {name:"Abnormal Menstruation"},
    {name:"Continuous Feel Of Urine"},
    {name:"Dark Urine"},
    {name:"Yellow Urine"},
    {name:"Polyuria"},
    {name:"Burning Micturition"},]
    
    useEffect(()=>{
    setUser(userData);
    },[]);

  return (
    <>
    {user.map((user)=>(
        <label class="checkContainer">{user.name}
        <input type="checkbox" name={user.name} onChange={(e) =>{props.handleChangeGenital(e.target.checked,user.name)}}/>
        <span class="checkmark"></span>
    </label>
    ))}
    </>
  );
}

export default GenitalDisease;