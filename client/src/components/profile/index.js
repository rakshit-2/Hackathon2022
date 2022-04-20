import React from 'react';
import './index.css';
import { useHistory } from 'react-router';
import { useState } from 'react';
const Profile = (props) => 
{
  return (
    <>
    <div className='profile-outermost'>
      <div className='profile-container'>
        <div className='profile-title'>profile</div>
        <form className='profile-form'>
          <div className='profile-user-details'>
            <div className='profile-input-box'>
              <span className='profile-details'>Full Name</span>
              <input className='profile-input' type='text' placeholder='Enter your name' required></input>

            </div>
            
            <div className='profile-input-box'>
              <span className='profile-details'>Email</span>
              <input className='profile-input' type='text' placeholder='Enter your email' required></input>
              
            </div>
            <div className='profile-input-box'>
              <span className='profile-details'>age</span>
              <input className='profile-input' type='text' placeholder='Enter your age' required></input>
              
            </div>
            <div className='profile-input-box'>
              <span className='profile-details'>phone number</span>
              <input className='profile-input' type='text' placeholder='Enter your phone number' required></input>
              
            </div>
            <div className='profile-input-box'>
              <span className='profile-details'>address</span>
              <input className='profile-input' type='text' placeholder='Enter your name' required></input>
              
            </div>
            <div className='profile-input-box'>
              <span className='profile-details'>pincode</span>
              <input className='profile-input' type='text' placeholder='Enter your name' required></input>
              
            </div>
          </div>
          <div className='profile-gender'>
            <span className='profile-gender-title'>Gender</span>
            <div className='profile-category'>
              <label>
              <span className='profile-dot one'></span>
              <span className='profile-gender'>Male</span>
              </label>
              <label>
              <span className='profile-dot one'></span>
              <span className='profile-gender'>Female</span>
              </label>
              <label>
              <span className='profile-dot one'></span>
              <span className='profile-gender'>prefer not to say</span>
              </label>
            </div>
            

          </div>
          <div className='profile-button'>
            <input type='submit' value='update'></input>
          </div>
        </form>
      </div>
    </div>
    
    </>
  );

  }
export default Profile;