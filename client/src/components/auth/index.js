import React from 'react';
import './index.css';
import { useHistory } from 'react-router';
import { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import Axios from 'axios';


const Auth = (props) => 
{
  const [Gname,changeGname]=useState("")
  const [Gimage,changeGimage]=useState("")
  const [Gemail,changeGemail]=useState("")
  const [Glogin,changeGlogin]=useState("0")
  const [Gid,changeGid]=useState("")

 const[createName,setCreateName]=useState("")
 const[createEmail,setCreateEmail]=useState("")
 const[createPass,setCreatePass]=useState("")
 const[checkEmail,setCheckEmail]=useState("")
 const[checkPass,setCheckPass]=useState("")


  const [len,setLen]=useState('block')
  const [num,setNum]=useState('block')
  const [spe,setSpe]=useState('block')
  const [upa,setUpa]=useState('block')

  const [flagPass,setFlagPass]=useState(0)
  const [flagEmail,setFlagEmail]=useState(0)
  const [flagName,setFlagName]=useState(0)

  const[valFail,setValFail]=useState({
                                      text:""
  })

  const responseGoogle = (response) => {
    console.log(response)
    changeGlogin("1")
    changeGname(response.profileObj.name)
    changeGimage(response.profileObj.imageUrl)
    console.log(response.profileObj.imageUrl)
    changeGemail(response.profileObj.email)
    changeGid(response.profileObj.googleId)
  }

  const[changeDisplay,setChangeDisplay]=useState({
                                                  signin:"block",
                                                  signup:"none",
                                                  textP:'Enter your personal details and start your journey with us',
                                                  heading:'Hello, Friend!',
                                                  count:1,
                                                  name:'SIGN UP',
  })


  function changeButton(x)
  {
    if(x===1)
    {
      setChangeDisplay({signin:"none",singup:"block",textP:'To keep connected with us please login with your personal info',heading:'Welcome Back!',count:2,name:"SIGN IN"})
    }
    else{
      setChangeDisplay({signin:"block",singup:"none",textP:'Enter your personal details and start your journey with us',heading:'Hello, Friend!',count:1,name:"SIGN UP"})
    }
  }

  const submitValueCreate = () => {
    if(flagPass===1 && flagEmail===1)
    {
      setValFail({text:""})
      Axios.post('http://localhost:3001/insert/signup',
      {
        name:createName,
        email:createEmail,
        password:createPass,
      }).then(()=>{
        console.log("successful signup");
      });
    }
    else
    {
      if(flagPass!==1 || flagEmail!==1 || flagName!==1)
      {
        setValFail({text:"Fill All Info Correctly !!"})
      }
      console.log("signup Failed")
    }
      
  }
  const submitValueCheck = () => {
    Axios.get('http://localhost:3001/get/login',
    {
      params:{
        email:createEmail,
      }
    }).then((res)=>{
      console.log(res)
      if(res.data[0].password==createPass)
      {
        console.log("logged in")
      }
    });
  }


  function namecheck(e)
  {
    if(String(e)!=="")
    {
      setCreateName(String(e));
      setFlagName(1);
    }
    else
    {
      setFlagName(0);
    }
  }

  function emailcheck(e)
  {
      if(String(e).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))
      {
        setCreateEmail(String(e));
        setFlagEmail(1);
      }
      else
      {
        setFlagEmail(0);
      }
  }



  function passcheck(e)
  {
      if(String(e).match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$!%*?&])[A-Za-z\d@#$!%*?&]{8,}$/))
      {
        setCreatePass(String(e));
        setFlagPass(1);
      }
      else
      {
        setFlagPass(0);    
      }
      if(String(e).match(/^.{8,}$/))
      {setLen('none')}
      else{setLen('block')}
      if(String(e).match(/\d/))
      {setNum('none')}
      else{setNum('block')}
      if(String(e).match(/.*[@$!%*?&#]/))
      {setSpe('none')}
      else{setSpe('block')}
      if(String(e).match(/.*[A-Z]/))
      {setUpa('none')}
      else{setUpa('block')}
  }
  

  return (
      <div className="container">
        <div className='signin-outer' style={{display:changeDisplay.signup}}>
          <div className="form-container sign-up-container">
              <form>
                  <div className='auth-h1'>Create Account</div><br></br>
                  <div className='auth-span'>or use your email for registration</div><br></br>
                  <input type="text" placeholder="Name" onChange={(e)=>{namecheck(e.target.value)}}  required='required'/>
                  <input type="email" placeholder="Email" onChange={(e)=>{emailcheck(e.target.value)}} required='required'/>
                  <input type="password" placeholder="Password" onChange={(e)=>{passcheck(e.target.value)}} required='required'/>
                  <div className="validation-pass" style={{display:len}}>
                  {'\u00A0'}Min 8 letters
                  </div>
                  <div className="validation-pass" style={{display:num}}>
                  {'\u00A0'}Number
                  </div>
                  <div className="validation-pass" style={{display:spe}}>
                  {'\u00A0'}Special Character
                  </div>
                  <div className="validation-pass" style={{display:upa}}>
                  {'\u00A0'}Uppercase letter
                  </div>
                  <button classname="button" type="button" onClick={submitValueCreate}>Sign Up</button><br></br>

                  <div className='valfailcheck' style={{display:"block"}}>
                    {valFail.text}
                  </div>
              </form>
          </div>
        </div>
        <div className='signin-outer' style={{display:changeDisplay.signin}}>
          <div className="form-container sign-in-container">
              <form>
                  <div className='auth-h1'>SIGN IN</div>
                  <div className="social-container">
                      <GoogleLogin
                          clientId="12638421748-adcs1tb8de2vk21g4rq3etaod7obfh95.apps.googleusercontent.com"
                          buttonText="Google Login"
                          onSuccess={responseGoogle}
                          onFailure={responseGoogle}
                          cookiePolicy={'single_host_origin'}
                      />
                  </div>
                  <div className='auth-span'>or use your account</div><br></br>
                  <input type="email" placeholder="Email" onChange={v=>setCheckEmail(v.target.value)}/>
                  <input type="password" placeholder="Password" onChange={v=>setCheckPass(v.target.value)} />
                  <div className='auth-a'>Forgot your password?</div>
                  <button type="button" onClick={submitValueCheck}>Sign In</button>
              </form>
          </div>
        </div>
        
        <div className="overlay-container">
            <div className="overlay">
              <div className='overley-outer2'>
                <div className="overlay-panel overlay-right">
                    <div className='auth-h1'>{changeDisplay.heading}</div>
                    <div className='auth-p'>{changeDisplay.textP}</div>
                    <button className="ghost" onClick={()=>{changeButton(changeDisplay.count)}}>{changeDisplay.name}</button>
                </div>
              </div>
            </div>

        </div>

    </div>
  );
}

export default Auth;