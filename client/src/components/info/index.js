import React, { useEffect } from 'react';
import './index.css';
import { useHistory } from 'react-router';
import { useState } from 'react';
import CommonDisease from './../formEach/commonDisease/index';
import SkinDisease from './../formEach/skinDisease/index';
import LungDisease from './../formEach/LungDisease/index';
import PainDisease from './../formEach/painDisease/index';
import GenitalDisease from './../formEach/genitalDisease/index';
import KidneyDisease from './../formEach/kidneyDisease/index';
import StomachDisease from './../formEach/stomachDisease/index';
import HeartDisease from './../formEach/heartDisease/index';
import OralDisease from './../formEach/oralDisease/index';
import BrainDisease from './../formEach/brainDisease/index';
import Axios from 'axios';







// Uncomment this : to check : if python file is not working fine....
// childPython.on('close', (code) => {
//     console.log(`child process excited with code ${code}`);
// });






const Info = (props) => 
{


    const[change,setChange]=useState({
        text1:'none',button11:'block',button12:'none',
        text2:'none',button21:'block',button22:'none',
        text3:'none',button31:'block',button32:'none',
        text4:'none',button41:'block',button42:'none',
        text5:'none',button51:'block',button52:'none',
        text6:'none',button61:'block',button62:'none',
        text7:'none',button71:'block',button72:'none',
        text8:'none',button81:'block',button82:'none',
        text9:'none',button91:'block',button92:'none',
        text10:'none',button101:'block',button102:'none',
    })

    // common
    const[mildFever,setMildFever]=useState(0);
    const[weightLoss,setWeightLoss]=useState(0)
    const[wateringEyes,setWateringEyes]=useState(0);
    const[sweating,setSweating]=useState(0)
    const[swollenExtremities,setSwollenExtremities]=useState(0);
    function handleChangeCommon(e,i)
    {
    if(i==='Mild Fever')
    {
        if(e===true)
        {
            setMildFever(1)
        }
        else
        {
            setMildFever(0)
        }
    }
    else if(i==="Weight Loss")
    {
        if(e===true)
        {
            setWeightLoss(1)
        }
        else
        {
            setWeightLoss(0)
        }
    }
    else if(i==="Watering Eyes")
    {
        if(e===true)
        {
            setWateringEyes(1)
        }
        else
        {
            setWateringEyes(0)
        }
    }
    else if(i==="Sweating")
    {
        if(e===true)
        {
            setSweating(1)
        }
        else
        {
            setSweating(0)
        }
    }
    else if(i==="Swollen Extremities")
    {
        if(e===true)
        {
            setSwollenExtremities(1)
        }
        else
        {
            setSwollenExtremities(0)
        }
    }
    }  

    // brain
    const[depression,setDepression]=useState(0);
    const[alteredSensorium,setAlteredSensorium]=useState(0)
    const[lackOfConcentration,setLackOfConcentration]=useState(0);
    const[unsteadiness,setUnsteadiness]=useState(0)
    function handleChangeBrain(e,i)
    {
    if(i==="Depression")
    {
        if(e===true)
        {
            setDepression(1)
        }
        else
        {
            setDepression(0)
        }
    }
    else if(i==="Altered Sensorium")
    {
        if(e===true)
        {
            setAlteredSensorium(1)
        }
        else
        {
            setAlteredSensorium(0)
        }
    }
    else if(i==="Lack Of Concentration")
    {
        if(e===true)
        {
            setLackOfConcentration(1)
        }
        else
        {
            setLackOfConcentration(0)
        }
    }
    else if(i==="Unsteadiness")
    {
        if(e===true)
        {
            setUnsteadiness(1)
        }
        else
        {
            setUnsteadiness(0)
        }
    }
    }

    // genital
    const[concernalMenusruation,setConcernalMenusruation]=useState(0);
    const[recievingUnsterileInjections,setRecievingUnsterileInjections]=useState(0)
    function handleChangeGenital(e,i)
    {
    if(i==="Concernal Menusruation")
    {
        if(e===true)
        {
            setConcernalMenusruation(1)
        }
        else
        {
            setConcernalMenusruation(0)
        }
    }
    else if(i==="Recieving Unsterile Injections")
    {
        if(e===true)
        {
            setRecievingUnsterileInjections(1)
        }
        else
        {
            setRecievingUnsterileInjections(0)
        }
    }
    }

    // heart
    const[fastHeartRate,setFastHeartRate]=useState(0);
    function handleChangeHeart(e,i)
    {
    if(i==="Fast Heart Rate")
    {
        if(e===true)
        {
            setFastHeartRate(1)
        }
        else
        {
            setFastHeartRate(0)
        }
    }
    }

    // kidney
    const[polyuria,setPolyuria]=useState(0);
    const[continuousFeelOfUrine,setContinuousFeelOfUrine]=useState(0)
    const[spottingUrination,setSpottingUrination]=useState(0);
    function handleChangeKidney(e,i)
    {
    if(i==="Polyuria")
    {
        if(e===true)
        {
            setPolyuria({"Polyuria":1})
        }
        else
        {
            setPolyuria({"Polyuria":0})
        }
    }
    else if(i==="Continuous Feel Of Urine")
    {
        if(e===true)
        {
            setContinuousFeelOfUrine({"Continuous Feel Of Urine":1})
        }
        else
        {
            setContinuousFeelOfUrine({"Continuous Feel Of Urine":0})
        }
    }
    else if(i==="Spotting Urination")
    {
        if(e===true)
        {
            setSpottingUrination({"Spotting Urination":1})
        }
        else
        {
            setSpottingUrination({"Spotting Urination":0})
        }
    }
    }

    // lung
    const[throatIrritation,setThroatIrritation]=useState(0);
    const[bloodInSputum,setBloodInSputum]=useState(0)
    function handleChangeLung(e,i)
    {
    if(i==="Throat Irritation")
    {
        if(e===true)
        {
            setThroatIrritation(1)
        }
        else
        {
            setThroatIrritation(0)
        }
    }
    else if(i==="Blood in Sputum")
    {
        if(e===true)
        {
            setBloodInSputum(1)
        }
        else
        {
            setBloodInSputum(0)
        }
    }
    }

    // oral
    const[ulcerOnTongue,setUlcerOnTongue]=useState(0);
    const[patchesInThroat,setPatchesInThroat]=useState(0)
    const[slurredSpeech,setSlurredSpeech]=useState(0);
    function handleChangeOral(e,i)
    {
    if(i==="Ulcer On Tongue")
    {
        if(e===true)
        {
            setUlcerOnTongue(1)
        }
        else
        {
            setUlcerOnTongue(0)
        }
    }
    else if(i==="Patches In Throat")
    {
        if(e===true)
        {
            setPatchesInThroat(1)
        }
        else
        {
            setPatchesInThroat(0)
        }
    }
    else if(i==="Slurred Speech")
    {
        if(e===true)
        {
            setSlurredSpeech(1)
        }
        else
        {
            setSlurredSpeech(0)
        }
    }
    }

    // pain
    const[musclePain,setMusclePain]=useState(0);
    const[backPain,setBackPain]=useState(0)
    const[neckPain,setNeckPain]=useState(0);
    const[hibJointPain,setHibJointPain]=useState(0)
    const[bellyPain,setBellyPain]=useState(0);
    function handleChangePain(e,i)
    {
    if(i==="Muscle Pain")
    {
        if(e===true)
        {
            setMusclePain(1)
        }
        else
        {
            setMusclePain(0)
        }
    }
    else if(i==="Back Pain")
    {
        if(e===true)
        {
            setBackPain(1)
        }
        else
        {
            setBackPain(0)
        }
    }
    else if(i==="Neck Pain")
    {
        if(e===true)
        {
            setNeckPain(1)
        }
        else
        {
            setNeckPain(0)
        }
    }
    else if(i==="Hib Joint Pain")
    {
        if(e===true)
        {
            setHibJointPain(1)
        }
        else
        {
            setHibJointPain(0)
        }
    }
    else if(i==="Belly Pain")
    {
        if(e===true)
        {
            setBellyPain(1)
        }
        else
        {
            setBellyPain(0)
        }
    }
    }

    // skin
    const[interalItching,setInteralItching]=useState(0);
    const[deschronicPatch,setDeschronicPatch]=useState(0)
    const[Itching,setItching]=useState(0);
    const[pusFilledPimples,setPusFilledPimples]=useState(0)
    const[silverLikeDusting,setSilverLikeDusting]=useState(0);
    function handleChangeSkin(e,i)
    {
    if(i==="Interal Itching")
    {
        if(e===true)
        {
            setInteralItching(1)
        }
        else
        {
            setInteralItching(0)
        }
    }
    else if(i==="Deschronic Patch")
    {
        if(e===true)
        {
            setDeschronicPatch(1)
        }
        else
        {
            setDeschronicPatch(0)
        }
    }
    else if(i==="Itching")
    {
        if(e===true)
        {
            setItching(1)
        }
        else
        {
            setItching(0)
        }
    }
    else if(i==="Pus Filled Pimples")
    {
        if(e===true)
        {
            setPusFilledPimples(1)
        }
        else
        {
            setPusFilledPimples(0)
        }
    }
    else if(i==="Silver Like Dusting")
    {
        if(e===true)
        {
            setSilverLikeDusting(1)
        }
        else
        {
            setSilverLikeDusting(0)
        }
    }
    }


    // stomach
    const[Diarrhoea,setDiarrhoea]=useState(0);
    const[Consitpation,setConsitpation]=useState(0)
    const[stomachBleeding,setStomachBleeding]=useState(0);
    const[yellowingEyes,setYellowingEyes]=useState(0)
    const[Nausea,setNausea]=useState(0);
    function handleChangeStomach(e,i)
    {
    if(i==="Diarrhoea")
    {
        if(e===true)
        {
            setDiarrhoea(1)
        }
        else
        {
            setDiarrhoea(0)
        }
    }
    else if(i==="Consitpation")
    {
        if(e===true)
        {
            setConsitpation(1)
        }
        else
        {
            setConsitpation(0)
        }
    }
    else if(i==="Stomach Bleeding")
    {
        if(e===true)
        {
            setStomachBleeding(1)
        }
        else
        {
            setStomachBleeding(0)
        }
    }
    else if(i==="Yellowing Eyes")
    {
        if(e===true)
        {
            setYellowingEyes(1)
        }
        else
        {
            setYellowingEyes(0)
        }
    }
    else if(i==="Nausea")
    {
        if(e===true)
        {
            setNausea(1)
        }
        else
        {
            setNausea(0)
        }
    }
    }


    const[displayModaleError,setDisplayModaleError]=useState("none")
    const[displayModaleSuccess,setDisplayModaleSuccess]=useState("none")
    const[ansString,setAnsString]=useState("")
    
    function handleSubmit()
    {
        var ans="";
        var li=[]
        var lis=[mildFever,weightLoss,wateringEyes,sweating,swollenExtremities,depression,alteredSensorium,lackOfConcentration,unsteadiness,
            concernalMenusruation,recievingUnsterileInjections,fastHeartRate,polyuria,continuousFeelOfUrine,spottingUrination,throatIrritation,
            bloodInSputum,ulcerOnTongue,patchesInThroat,slurredSpeech,musclePain,backPain,neckPain,hibJointPain,bellyPain,interalItching,
            deschronicPatch,Itching,pusFilledPimples,silverLikeDusting,Diarrhoea,Consitpation,stomachBleeding,yellowingEyes,Nausea]
        var lis1=["Mild Fever","Weight Loss","Watering Eyes","Sweating","Swallen Extremities","Depression","Altered Sensorium","Lack Of Concentration",
            "Unsteadiness","Concernal Menusruation","Recieving Unsterile Injections","Fast Heart Rate","Polyuria","Continuous Feel Of Urine",
            "Spotting Urination","Throat Irritation","Blood In Sputum","Ulcer On Tongue","Patches In Throat","Slurred Speech","Muscle Pain","Back Pain",
            "Neck Pain","Hib Joint Pain","Belly Pain","Interal Itching","Deschronic Patch","Itching","Pus Filled Pimples","Silver Like Dusting","Diarrhoea",
            "Consitpation","Stomach Bleeding","Yellowing Eyes","Nausea"]
        for(var i=0;i<35;i++)
        {
            if(lis[i]==1)
            {
                li.push(lis1[i]);
            }
        }
        var len=li.length;
        if(len==0)
        {
            setDisplayModaleError("block")
            setDisplayModaleSuccess("none")
        }
        else{
            setDisplayModaleSuccess("block")
            setDisplayModaleError("none")
            for(var i=0;i<len-1;i++)
            {
                ans=ans+li[i]+","
            }
            ans=ans+li[len-1];
            Axios.get('http://localhost:3001/result',
            {
                params:{
                    ans:ans,
                  }
            }).then((res)=>{
                console.log(res);
            });
        }
    }



    return (
    <>
    <div class="questions">
        <div class="title">
            <h2>Check Up Form</h2>
        </div>
        <div class="section-center">
          <article class="question">
              <div class="question-title">
                  <p>Do you have <span style={{color:"red"}}>Common Disease</span>? if yes then select from given options.</p>
                  <button type="button" class="question-btn">
                      <span class="plus-icon"  style={{display:change.button11}} onClick={()=>{setChange({text1:"block",button11:"none",button12:"block"})}}>
                          <i class="far fa-plus-square"></i>
                      </span>
                      <span class="minus-icon" style={{display:change.button12}} onClick={()=>{setChange({text1:"none",button11:"block",button12:"none"})}}>
                          <i class="far fa-minus-square"></i>
                      </span>
                  </button>
              </div>
              <div class="question-text" style={{display:change.text1}}>
                  <p>
                    <CommonDisease handleChangeCommon={handleChangeCommon}/>
                  </p>
              </div>
          </article>
        </div>
        <div class="section-center">
          <article class="question">
              <div class="question-title">
                  <p>Do you have <span style={{color:"red"}}>Skin Disease</span>? if yes then select from given options.</p>
                  <button type="button" class="question-btn">
                      <span class="plus-icon"  style={{display:change.button21}} onClick={()=>{setChange({text2:"block",button21:"none",button22:"block"})}}>
                          <i class="far fa-plus-square"></i>
                      </span>
                      <span class="minus-icon" style={{display:change.button22}} onClick={()=>{setChange({text2:"none",button21:"block",button22:"none"})}}>
                          <i class="far fa-minus-square"></i>
                      </span>
                  </button>
              </div>
              <div class="question-text" style={{display:change.text2}}>
                  <p>
                    <SkinDisease handleChangeSkin={handleChangeSkin}/>
                  </p>
              </div>
          </article>
        </div>
        <div class="section-center">
          <article class="question">
              <div class="question-title">
                  <p>Do you have <span style={{color:"red"}}>Lungs Disease</span>? if yes then select from given options.</p>
                  <button type="button" class="question-btn">
                      <span class="plus-icon"  style={{display:change.button31}} onClick={()=>{setChange({text3:"block",button31:"none",button32:"block"})}}>
                          <i class="far fa-plus-square"></i>
                      </span>
                      <span class="minus-icon" style={{display:change.button32}} onClick={()=>{setChange({text3:"none",button31:"block",button32:"none"})}}>
                          <i class="far fa-minus-square"></i>
                      </span>
                  </button>
              </div>
              <div class="question-text" style={{display:change.text3}}>
                  <p>
                    <LungDisease handleChangeLung={handleChangeLung}/>
                  </p>
              </div>
          </article>
        </div>
        <div class="section-center">
          <article class="question">
              <div class="question-title">
                  <p>Do you have <span style={{color:"red"}}>Pain Disease</span>? if yes then select from given options.</p>
                  <button type="button" class="question-btn">
                      <span class="plus-icon"  style={{display:change.button41}} onClick={()=>{setChange({text4:"block",button41:"none",button42:"block"})}}>
                          <i class="far fa-plus-square"></i>
                      </span>
                      <span class="minus-icon" style={{display:change.button42}} onClick={()=>{setChange({text4:"none",button41:"block",button42:"none"})}}>
                          <i class="far fa-minus-square"></i>
                      </span>
                  </button>
              </div>
              <div class="question-text" style={{display:change.text4}}>
                  <p>
                    <PainDisease handleChangePain={handleChangePain}/>
                  </p>
              </div>
          </article>
        </div>
        <div class="section-center">
          <article class="question">
              <div class="question-title">
                  <p>Do you have <span style={{color:"red"}}>Genital Disease</span>? if yes then select from given options.</p>
                  <button type="button" class="question-btn">
                      <span class="plus-icon"  style={{display:change.button51}} onClick={()=>{setChange({text5:"block",button51:"none",button52:"block"})}}>
                          <i class="far fa-plus-square"></i>
                      </span>
                      <span class="minus-icon" style={{display:change.button52}} onClick={()=>{setChange({text5:"none",button51:"block",button52:"none"})}}>
                          <i class="far fa-minus-square"></i>
                      </span>
                  </button>
              </div>
              <div class="question-text" style={{display:change.text5}}>
                  <p>
                    <GenitalDisease handleChangeGenital={handleChangeGenital}/>
                  </p>
              </div>
          </article>
        </div>
        <div class="section-center">
          <article class="question">
              <div class="question-title">
                  <p>Do you have <span style={{color:"red"}}>Kidney Disease</span>? if yes then select from given options.</p>
                  <button type="button" class="question-btn">
                      <span class="plus-icon"  style={{display:change.button61}} onClick={()=>{setChange({text6:"block",button61:"none",button62:"block"})}}>
                          <i class="far fa-plus-square"></i>
                      </span>
                      <span class="minus-icon" style={{display:change.button62}} onClick={()=>{setChange({text6:"none",button61:"block",button62:"none"})}}>
                          <i class="far fa-minus-square"></i>
                      </span>
                  </button>
              </div>
              <div class="question-text" style={{display:change.text6}}>
                  <p>
                    <KidneyDisease handleChangeKidney={handleChangeKidney}/>
                  </p>
              </div>
          </article>
        </div>
        <div class="section-center">
          <article class="question">
              <div class="question-title">
                  <p>Do you have <span style={{color:"red"}}>Stomch Disease</span>? if yes then select from given options.</p>
                  <button type="button" class="question-btn">
                      <span class="plus-icon"  style={{display:change.button71}} onClick={()=>{setChange({text7:"block",button71:"none",button72:"block"})}}>
                          <i class="far fa-plus-square"></i>
                      </span>
                      <span class="minus-icon" style={{display:change.button72}} onClick={()=>{setChange({text7:"none",button71:"block",button72:"none"})}}>
                          <i class="far fa-minus-square"></i>
                      </span>
                  </button>
              </div>
              <div class="question-text" style={{display:change.text7}}>
                  <p>
                    <StomachDisease handleChangeStomach={handleChangeStomach}/>
                  </p>
              </div>
          </article>
        </div>
        <div class="section-center">
          <article class="question">
              <div class="question-title">
                  <p>Do you have <span style={{color:"red"}}>Heart Disease</span>? if yes then select from given options.</p>
                  <button type="button" class="question-btn">
                      <span class="plus-icon"  style={{display:change.button81}} onClick={()=>{setChange({text8:"block",button81:"none",button82:"block"})}}>
                          <i class="far fa-plus-square"></i>
                      </span>
                      <span class="minus-icon" style={{display:change.button82}} onClick={()=>{setChange({text8:"none",button81:"block",button82:"none"})}}>
                          <i class="far fa-minus-square"></i>
                      </span>
                  </button>
              </div>
              <div class="question-text" style={{display:change.text8}}>
                  <p>
                    <HeartDisease handleChangeHeart={handleChangeHeart}/>
                  </p>
              </div>
          </article>
        </div>
        <div class="section-center">
          <article class="question">
              <div class="question-title">
                  <p>Do you have <span style={{color:"red"}}>Oral Disease</span>? if yes then select from given options.</p>
                  <button type="button" class="question-btn">
                      <span class="plus-icon"  style={{display:change.button91}} onClick={()=>{setChange({text9:"block",button91:"none",button92:"block"})}}>
                          <i class="far fa-plus-square"></i>
                      </span>
                      <span class="minus-icon" style={{display:change.button92}} onClick={()=>{setChange({text9:"none",button91:"block",button92:"none"})}}>
                          <i class="far fa-minus-square"></i>
                      </span>
                  </button>
              </div>
              <div class="question-text" style={{display:change.text9}}>
                  <p>
                    <OralDisease handleChangeOral={handleChangeOral}/>
                  </p>
              </div>
          </article>
        </div>
        <div class="section-center">
          <article class="question">
              <div class="question-title">
                  <p>Do you have <span style={{color:"red"}}>Brain Disease</span>? if yes then select from given options.</p>
                  <button type="button" class="question-btn">
                      <span class="plus-icon"  style={{display:change.button101}} onClick={()=>{setChange({text10:"block",button101:"none",button102:"block"})}}>
                          <i class="far fa-plus-square"></i>
                      </span>
                      <span class="minus-icon" style={{display:change.button102}} onClick={()=>{setChange({text10:"none",button101:"block",button102:"none"})}}>
                          <i class="far fa-minus-square"></i>
                      </span>
                  </button>
              </div>
              <div class="question-text" style={{display:change.text10}}>
                  <p>
                    <BrainDisease handleChangeBrain={handleChangeBrain}/>
                  </p>
              </div>
          </article>
        </div>
        <div class="info-error-outer" style={{display:displayModaleError}}>
            <div className='info-error-inner'>
                <div className='info-error-inner-inner'>
                    Must check at least 1 symptom to get the result<br></br>
                    For better/accurate result provide more info
                </div>
            </div>
        </div>
        <div class="info-error-outer" style={{display:displayModaleSuccess}}>
            <div className='info-error-inner'>
                <div className='info-error-inner-inner-success'>
                    Get the result in one click<br></br>
                    For better/accurate result provide more info
                </div>
            </div>
        </div>
        <div class="info-button-outer">
            <div className='info-button' onClick={()=>{handleSubmit()}}>
                Result
            </div>
        </div>
        
    </div>

    </>
  );
}

export default Info;