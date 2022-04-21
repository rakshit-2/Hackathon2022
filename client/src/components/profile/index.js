import React from 'react';
import './index.css';
import { useHistory } from 'react-router';
import { useState } from 'react';
import Axios from 'axios';


const Profile = (props) => 
{


  const[name,setName]=useState("");
  const[age,setAge]=useState(0);
  const[phone,setPhone]=useState(0);
  const[address,setAddress]=useState("");
  const[pincode,setPincode]=useState(0);


  function handleSubmit()
  {
    Axios.post('http://localhost:3001/profile',
    {
      name:name,
      email:props.authInfo.email,
      age:age,
      phone:phone,
      address:address,
    }).then((res)=>{
      console.log(res);
      props.handleProfile();
    });
  }
  return (
    <>
    <div className='profile-outermost'>
      <div className='profile-container'>
        <div className='profile-title'>Profile</div>
        <form className='profile-form'>
          <div className='profile-user-details'>
            <div className='profile-input-box'>
              <div className='profile-details'>Full Name</div>
              <input className='profile-input'  onChange={(e)=>{setName(e.target.value)}}    type='text' placeholder={props.authInfo.name} required></input>

            </div>
            
            <div className='profile-input-box'>
              <div className='profile-details'>Email</div>
              <input className='profile-input' type='text' style={{cursor:"not-allowed"}} placeholder={props.authInfo.email} required></input>
              
            </div>
            <div className='profile-input-box'>
              <div className='profile-details'>Age</div>
              <input className='profile-input' onChange={(e)=>{setAge(e.target.value)}} type='text' placeholder='Enter your age' required></input>
              
            </div>
            <div className='profile-input-box'>
              <div className='profile-details'>Phone Number</div>
              <input className='profile-input' onChange={(e)=>{setPhone(e.target.value)}} type='text' placeholder='Enter your phone number' required></input>
              
            </div>
            <div className='profile-input-box'>
              <div className='profile-details'>Address</div>
              <input className='profile-input' onChange={(e)=>{setAddress(e.target.value)}} type='text' placeholder='Enter your address' required></input>
              
            </div>
            <div className='profile-input-box'>
              <div className='profile-details'>Pincode</div>
              <input className='profile-input' onChange={(e)=>{setPincode(e.target.value)}} type='number' placeholder='Enter your pincode' required></input>
              
            </div>
          </div>
          
          
          {/* <div className="profile-gender">

            <div className='profile-gender-title'>Gender</div>
              
                <div className='profile-gender-inner'>
                  <input className="profile-gender-input" type="radio" name="radio" />
                  <div className='profile-gender-info'>Male</div>
                </div>
                <div className='profile-gender-inner'>
                  <input className="profile-gender-input" type="radio" name="radio"/>
                  <div className='profile-gender-info'>Female</div>
                </div>
                <div className='profile-gender-inner'>
                  <input  className="profile-gender-input" type="radio" name="radio"/>
                  <div className='profile-gender-info'>other</div>
                </div>
              
          </div> */}
          <div className='profile-button'>
            <button onClick={()=>{handleSubmit()}} className='profile-button-inner' type='button' value='save'> SAVE</button>
          </div>
        </form>
      </div>
    </div>
    
    </>
  );

  }
export default Profile;