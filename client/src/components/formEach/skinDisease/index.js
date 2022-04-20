import React, { useEffect } from 'react';
import { useState } from 'react';
const SkinDisease = (props) => 
{
    const[user,setUser]=useState([])
    const userData=[
    {name:"Blackheads"},
    {name:"Skin Rash"},
    {name:"Itching"},
    {name:"Internal Itching"},
    {name:"Skin Peeling"},]

    useEffect(()=>{
    setUser(userData);
    },[]);

  return (
    <>
    {user.map((user)=>(
        <label class="checkContainer">{user.name}
        <input type="checkbox" name={user.name} onChange={(e) =>{props.handleChangeSkin(e.target.checked,user.name)}}/>
        <span class="checkmark"></span>
    </label>
    ))}
    </>
  );
}

export default SkinDisease;