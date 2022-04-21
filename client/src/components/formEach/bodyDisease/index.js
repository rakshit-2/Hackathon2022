import React, { useEffect } from 'react';
import { useState } from 'react';
const BodyDisease = (props) => 
{
    const[user,setUser]=useState([])
    const userData=[
    {name:"Loss Of Appetite"},
    {name:"Loss Of Balance"},
    {name:"Loss Of Smell"},
    {name:"Weight Gain"},
    {name:"Weight Loss"},
    {name:"Muscle Weakness"},
    {name:"High Fever"},
    {name:"Mild Fever"},
    {name:"Cold Hands And Feets"},
    {name:"Throat Irritation"},
    {name:"fast Heart Rate"},
    {name:"Sweating"},
    {name:"Fatigue"},
    {name:"Chills"},
    {name:"Malaise"},
    {name:"Excessive Hunger"},
    {name:"Lethargy"},
    {name:"Phlegm"},
    {name:"Swelled Lymph Nodes"},
    {name:"Swelling Joints"},
    {name:"Obesity"},
    {name:"Restlessness"},
    {name:"Red Spots Over Body"},
    {name:"Stiff Neck"},
    {name:"Mood Swings"},
    {name:"Continuous Sneezing"},
    {name:"Acidity"},
  ]
    
    useEffect(()=>{
    setUser(userData);
    },[]);
    
  return (
    <>
    {user.map((user)=>(
        <label class="checkContainer">{user.name}
        <input type="checkbox" name={user.name} onChange={(e) =>{props.handleChangeBody(e.target.checked,user.name)}}/>
        <span class="checkmark"></span>
    </label>
    ))}
    </>
  );
}

export default BodyDisease;