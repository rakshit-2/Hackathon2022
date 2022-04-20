import React, { useEffect } from 'react';
import { useState } from 'react';
const KidneyDisease = (props) => 
{
    const[user,setUser]=useState([])
    const userData=[
    {name:"Polyuria"},
    {name:"Continuous Feel Of Urine"},
    {name:"Spotting Urination"},]
    useEffect(()=>{
    setUser(userData);
    },[]);

  return (
    <>
    {user.map((user)=>(
        <label class="checkContainer">{user.name}
        <input type="checkbox" name={user.name} onChange={(e) =>{props.handleChangeKidney(e.target.checked,user.name)}}/>
        <span class="checkmark"></span>
    </label>
    ))}
    </>
  );
}

export default KidneyDisease;