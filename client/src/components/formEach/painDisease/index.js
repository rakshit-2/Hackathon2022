import React, { useEffect } from 'react';
import { useState } from 'react';
const PainDisease = (props) => 
{
    const[user,setUser]=useState([])
    const userData=[
    {name:"Painful Walking"},
    {name:"Belly Pain"},
    {name:"Muscle Pain"},
    {name:"Hip Joint Pain"},
    {name:"Knee Pain"},
    {name:"Neck Pain"},
    {name:"Pain In Anal Region"},
    {name:"Pain During Bowel Movements"},
    {name:"Chest Pain"},
    {name:"Abdominal Pain"},
    {name:"Back Pain"},
    {name:"Pain Behind The Eyes"},
    {name:"Stomach Pain"},
    {name:"Joint Pain"},]

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