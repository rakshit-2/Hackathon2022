import React, { useEffect } from 'react';
import { useState } from 'react';
const HeartDisease = (props) => 
{
    const[user,setUser]=useState([])
    const userData=[
    {name:"Fast Heart Rate"},]
    useEffect(()=>{
    setUser(userData);
    },[]);

  return (
    <>
    {user.map((user)=>(
        <label class="checkContainer">{user.name}
        <input type="checkbox" name={user.name} onChange={(e) =>{props.handleChangeHeart(e.target.checked,user.name)}}/>
        <span class="checkmark"></span>
    </label>
    ))}
    </>
  );
}

export default HeartDisease;