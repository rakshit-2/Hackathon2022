import React, { useEffect } from 'react';
import './index.css';
import { useHistory } from 'react-router';
import { useState } from 'react';
import BodyDisease from './../formEach/bodyDisease/index';
import SkinDisease from './../formEach/skinDisease/index';
import LegDisease from './../formEach/legDisease/index';
import PainDisease from './../formEach/painDisease/index';
import GenitalDisease from './../formEach/genitalDisease/index';
import StomachDisease from './../formEach/stomachDisease/index';
import EyeDisease from './../formEach/eyeDisease/index';
import MouthDisease from './../formEach/mouthDisease/index';
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

    // ------------------body
    const[LossOfAppetite,setLossOfAppetite]=useState(0);
    const[LossOfBalance,setLossOfBalance]=useState(0)
    const[LossOfSmell,setLossOfSmell]=useState(0);
    const[WeightGain,setWeightGain]=useState(0)
    const[WeightLoss,setWeightLoss]=useState(0);
    const[MuscleWeakness,setMuscleWeakness]=useState(0);
    const[HighFever,setHighFever]=useState(0)
    const[MildFever,setMildFever]=useState(0);
    const[ColdHandsAndFeets,setColdHandsAndFeets]=useState(0)
    const[ThroatIrritation,setThroatIrritation]=useState(0);
    const[FastHeartRate,setFastHeartRate]=useState(0)
    const[Sweating,setSweating]=useState(0);
    function handleChangeBody(e,i)
    {
    if(i==='Loss Of Appetite')
    {
        if(e===true)
        {
            setLossOfAppetite(1)
        }
        else
        {
            setLossOfAppetite(0)
        }
    }
    else if(i==="Loss Of Balance")
    {
        if(e===true)
        {
            setLossOfBalance(1)
        }
        else
        {
            setLossOfBalance(0)
        }
    }
    else if(i==="Loss Of Smell")
    {
        if(e===true)
        {
            setLossOfSmell(1)
        }
        else
        {
            setLossOfSmell(0)
        }
    }
    else if(i==="Weight Gain")
    {
        if(e===true)
        {
            setWeightGain(1)
        }
        else
        {
            setWeightGain(0)
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
    else if(i==="Muscle Weakness")
    {
        if(e===true)
        {
            setMuscleWeakness(1)
        }
        else
        {
            setMuscleWeakness(0)
        }
    }
    else if(i==="High Fever")
    {
        if(e===true)
        {
            setHighFever(1)
        }
        else
        {
            setHighFever(0)
        }
    }
    else if(i==="Mild Fever")
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
    else if(i==="Cold Hands And Feets")
    {
        if(e===true)
        {
            setColdHandsAndFeets(1)
        }
        else
        {
            setColdHandsAndFeets(0)
        }
    }
    else if(i==="Throat Irritation")
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
    else if(i==="fast Heart Rate")
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
    }  

    // --------brain
    const[Anxiety,setAnxiety]=useState(0);
    const[Depression,setDepression]=useState(0)
    const[AlteredSensorium,setAlteredSensorium]=useState(0);
    const[LackOfConcentration,setLackOfConcentration]=useState(0)
    const[Unsteadiness,setUnsteadiness]=useState(0)
    function handleChangeBrain(e,i)
    {
    if(i==="Anxiety")
    {
        if(e===true)
        {
            setAnxiety(1)
        }
        else
        {
            setAnxiety(0)
        }
    }
    else if(i==="Depression")
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

    // ---------genital
    const[AbnormalMenstruation,setAbnormalMenstruation]=useState(0);
    const[ContinuousFeelOfUrine,setContinuousFeelOfUrine]=useState(0);
    const[DarkUrine,setDarkUrine]=useState(0);
    const[YellowUrine,setYellowUrine]=useState(0);
    const[Polyuria,setPolyuria]=useState(0);
    function handleChangeGenital(e,i)
    {
    if(i==="Abnormal Menstruation")
    {
        if(e===true)
        {
            setAbnormalMenstruation(1)
        }
        else
        {
            setAbnormalMenstruation(0)
        }
    }
    else if(i==="Continuous Feel Of Urine")
    {
        if(e===true)
        {
            setContinuousFeelOfUrine(1)
        }
        else
        {
            setContinuousFeelOfUrine(0)
        }
    }
    else if(i==="Dark Urine")
    {
        if(e===true)
        {
            setDarkUrine(1)
        }
        else
        {
            setDarkUrine(0)
        }
    }
    else if(i==="Yellow Urine")
    {
        if(e===true)
        {
            setYellowUrine(1)
        }
        else
        {
            setYellowUrine(0)
        }
    }
    else if(i==="Polyuria")
    {
        if(e===true)
        {
            setPolyuria(1)
        }
        else
        {
            setPolyuria(0)
        }
    }
    }

    // ------------------Eyes
    const[RednessOfEyes,setRednessOfEyes]=useState(0);
    const[WateringFromEyes,setWateringFromEyes]=useState(0);
    function handleChangeEyes(e,i)
    {
    if(i==="Redness Of Eyes")
    {
        if(e===true)
        {
            setRednessOfEyes(1)
        }
        else
        {
            setRednessOfEyes(0)
        }
    }
    if(i==="Watering From Eyes")
    {
        if(e===true)
        {
            setWateringFromEyes(1)
        }
        else
        {
            setWateringFromEyes(0)
        }
    }
    }

    // ---------leg
    const[SwollenLegs,setSwollenLegs]=useState(0);
    const[ProminentVeinsOnCalf,setProminentVeinsOnCalf]=useState(0)
    function handleChangeLegs(e,i)
    {
    if(i==="Swollen Legs")
    {
        if(e===true)
        {
            setSwollenLegs(1)
        }
        else
        {
            setSwollenLegs(0)
        }
    }
    else if(i==="Prominent Veins On Calf")
    {
        if(e===true)
        {
            setProminentVeinsOnCalf(1)
        }
        else
        {
            setProminentVeinsOnCalf(0)
        }
    }
    }

    // -----------mouth
    const[Cough,setCough]=useState(0);
    const[UlcersOnTongue,setUlcersOnTongue]=useState(0)
    const[PatchesInThroat,setPatchesInThroat]=useState(0);
    const[SlurredSpeech,setSlurredSpeech]=useState(0);
    function handleChangeMouth(e,i)
    {
    if(i==="Cough")
    {
        if(e===true)
        {
            setCough(1)
        }
        else
        {
            setCough(0)
        }
    }
    else if(i==="Ulcers On Tongue")
    {
        if(e===true)
        {
            setUlcersOnTongue(1)
        }
        else
        {
            setUlcersOnTongue(0)
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

    // ----------------pain
    const[PainfulWalking,setPainfulWalking]=useState(0);
    const[BellyPain,setBellyPain]=useState(0)
    const[MusclePain,setMusclePain]=useState(0);
    const[HipJointPain,setHipJointPain]=useState(0)
    const[KneePain,setKneePain]=useState(0);
    const[NeckPain,setNeckPain]=useState(0);
    const[PainInAnalRegion,setPainInAnalRegion]=useState(0)
    const[PainDuringBowelMovements,setPainDuringBowelMovements]=useState(0);
    const[ChestPain,setChestPain]=useState(0)
    const[AbdominalPain,setAbdominalPain]=useState(0);
    const[BackPain,setBackPain]=useState(0);
    const[PainBehindTheEyes,setPainBehindTheEyes]=useState(0)
    const[StomachPain,setStomachPain]=useState(0);
    const[JointPain,setJointPain]=useState(0);
    function handleChangePain(e,i)
    {
    if(i==="Painful Walking")
    {
        if(e===true)
        {
            setPainfulWalking(1)
        }
        else
        {
            setPainfulWalking(0)
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
    else if(i==="Muscle Pain")
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
    else if(i==="Hip Joint Pain")
    {
        if(e===true)
        {
            setHipJointPain(1)
        }
        else
        {
            setHipJointPain(0)
        }
    }
    else if(i==="Knee Pain")
    {
        if(e===true)
        {
            setKneePain(1)
        }
        else
        {
            setKneePain(0)
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
    else if(i==="Pain In Anal Region")
    {
        if(e===true)
        {
            setPainInAnalRegion(1)
        }
        else
        {
            setPainInAnalRegion(0)
        }
    }
    else if(i==="Pain During Bowel Movements")
    {
        if(e===true)
        {
            setPainDuringBowelMovements(1)
        }
        else
        {
            setPainDuringBowelMovements(0)
        }
    }
    else if(i==="Chest Pain")
    {
        if(e===true)
        {
            setChestPain(1)
        }
        else
        {
            setChestPain(0)
        }
    }
    else if(i==="Abdominal Pain")
    {
        if(e===true)
        {
            setAbdominalPain(1)
        }
        else
        {
            setAbdominalPain(0)
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
    else if(i==="Pain Behind The Eyes")
    {
        if(e===true)
        {
            setPainBehindTheEyes(1)
        }
        else
        {
            setPainBehindTheEyes(0)
        }
    }
    else if(i==="Stomach Pain")
    {
        if(e===true)
        {
            setStomachPain(1)
        }
        else
        {
            setStomachPain(0)
        }
    }
    else if(i==="Joint Pain")
    {
        if(e===true)
        {
            setJointPain(1)
        }
        else
        {
            setJointPain(0)
        }
    }
    }

    // --------skin
    const[Blackheads,setBlackheads]=useState(0);
    const[SkinRash,setSkinRash]=useState(0)
    const[Itching,setItching]=useState(0);
    const[InternalItching,setInternalItching]=useState(0)
    const[SkinPeeling,setSkinPeeling]=useState(0);
    function handleChangeSkin(e,i)
    {
    if(i==="Blackheads")
    {
        if(e===true)
        {
            setBlackheads(1)
        }
        else
        {
            setBlackheads(0)
        }
    }
    else if(i==="Skin Rash")
    {
        if(e===true)
        {
            setSkinRash(1)
        }
        else
        {
            setSkinRash(0)
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
    else if(i==="Internal Itching")
    {
        if(e===true)
        {
            setInternalItching(1)
        }
        else
        {
            setInternalItching(0)
        }
    }
    else if(i==="Skin Peeling")
    {
        if(e===true)
        {
            setSkinPeeling(1)
        }
        else
        {
            setSkinPeeling(0)
        }
    }
    }


    // ------------stomach
    const[SwellingOfStomach,setSwellingOfStomach]=useState(0);
    const[Indigestion,setIndigestion]=useState(0)
    const[Diarrhoea,setDiarrhoea]=useState(0);
    const[Constipation,setConstipation]=useState(0)
    const[StomachBleeding,setStomachBleeding]=useState(0);
    function handleChangeStomach(e,i)
    {
    if(i==="Swelling Of Stomach")
    {
        if(e===true)
        {
            setSwellingOfStomach(1)
        }
        else
        {
            setSwellingOfStomach(0)
        }
    }
    else if(i==="Indigestion")
    {
        if(e===true)
        {
            setIndigestion(1)
        }
        else
        {
            setIndigestion(0)
        }
    }
    else if(i==="Diarrhoea")
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
    else if(i==="Constipation")
    {
        if(e===true)
        {
            setConstipation(1)
        }
        else
        {
            setConstipation(0)
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
    }


    const[displayModaleError,setDisplayModaleError]=useState("none")
    const[displayModaleSuccess,setDisplayModaleSuccess]=useState("none")
    const[ansString,setAnsString]=useState("")
    

    // const[m1,setM1]=useState("")
    // const[m2,setM2]=useState("")
    // const[m3,setM3]=useState("")
    // const[m4,setM4]=useState("")


    function handleSubmit()
    {
        var ans="";
        var li=[]
        var lis=[LossOfAppetite, LossOfBalance, LossOfSmell, WeightGain, WeightLoss, 
            MuscleWeakness, HighFever, MildFever, ColdHandsAndFeets, ThroatIrritation, FastHeartRate, Sweating
            ,PainfulWalking, BellyPain, MusclePain, HipJointPain, KneePain, NeckPain, 
            PainInAnalRegion, PainDuringBowelMovements, ChestPain, AbdominalPain, BackPain, PainBehindTheEyes, StomachPain, JointPain
            ,RednessOfEyes, WateringFromEyes,SwellingOfStomach, Indigestion, Diarrhoea, 
            Constipation, StomachBleeding,Cough, UlcersOnTongue, PatchesInThroat, SlurredSpeech
            ,Anxiety, Depression, AlteredSensorium, LackOfConcentration, Unsteadiness,
            AbnormalMenstruation, ContinuousFeelOfUrine, DarkUrine, YellowUrine, Polyuria,Blackheads, 
            SkinRash, Itching, InternalItching, SkinPeeling,
            SwollenLegs, ProminentVeinsOnCalf]
        var lis1=["Loss Of Appetite", "Loss Of Balance", "Loss Of Smell", "Weight Gain", "Weight Loss", "Muscle Weakness", "High Fever", "Mild Fever", "Cold Hands And Feets", "Throat Irritation", "Fast Heart Rate", "Sweating",
        "Painful Walking", "Belly Pain", "Muscle Pain", "Hip Joint Pain", "Knee Pain", "Neck Pain", "Pain In Anal Region", "Pain During Bowel Movements", "Chest Pain", "Abdominal Pain", "Back Pain", "Pain Behind The Eyes",
        "Stomach Pain", "Joint Pain","Redness Of Eyes", "Watering From Eyes","Swelling Of Stomach", "Indigestion", "Diarrhoea", "Constipation", "Stomach Bleeding","Cough", "Ulcers On Tongue", "Patches In Throat", "Slurred Speech",
        "Anxiety", "Depression", "Altered Sensorium", "Lack Of Concentration", "Unsteadiness","Abnormal Menstruation", "Continuous Feel Of Urine", "Dark Urine", "Yellow Urine", "Polyuria","Blackheads", "Skin Rash", "Itching", 
        "Internal Itching", "Skin Peeling","Swollen Legs", "Prominent Veins On Calf"]
        for(var i=0;i<54;i++)
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
                    ans:li,
                  }
            }).then((res)=>{
                let a=(res.data)
                var l=[]
                var word=""
                for(var i=0;i<a.length-2;i++)
                {
                    if(a[i]==="|")
                    {
                        l.push(word);
                        word="";
                    }
                    else{
                        word=word+a[i]
                    }
                }
                l.push(word);
                props.getChangeState(l);
                props.getChangeState(l);
                props.getChangeState(l);
                props.getChangeState(l);
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
                  <p>Do you have <span style={{color:"red"}}>Body Related Issues</span>? if yes then select from given options.</p>
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
                    <BodyDisease handleChangeBody={handleChangeBody}/>
                  </p>
              </div>
          </article>
        </div>
        <div class="section-center">
          <article class="question">
              <div class="question-title">
                  <p>Do you have <span style={{color:"red"}}>Skin Related Issues</span>? if yes then select from given options.</p>
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
                  <p>Do you have <span style={{color:"red"}}>Leg Related Issues</span>? if yes then select from given options.</p>
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
                    <LegDisease handleChangeLegs={handleChangeLegs}/>
                  </p>
              </div>
          </article>
        </div>
        <div class="section-center">
          <article class="question">
              <div class="question-title">
                  <p>Do you have <span style={{color:"red"}}>Pain Related Issues</span>? if yes then select from given options.</p>
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
                  <p>Do you have <span style={{color:"red"}}>Genital Related Issues</span>? if yes then select from given options.</p>
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
                  <p>Do you have <span style={{color:"red"}}>Stomch Related Issues</span>? if yes then select from given options.</p>
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
                  <p>Do you have <span style={{color:"red"}}>Eye Related Issues</span>? if yes then select from given options.</p>
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
                    <EyeDisease handleChangeEyes={handleChangeEyes}/>
                  </p>
              </div>
          </article>
        </div>
        <div class="section-center">
          <article class="question">
              <div class="question-title">
                  <p>Do you have <span style={{color:"red"}}>Mouth Related Issues</span>? if yes then select from given options.</p>
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
                    <MouthDisease handleChangeMouth={handleChangeMouth}/>
                  </p>
              </div>
          </article>
        </div>
        <div class="section-center">
          <article class="question">
              <div class="question-title">
                  <p>Do you have <span style={{color:"red"}}>Brain Related Issues</span>? if yes then select from given options.</p>
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
                Submit Info
            </div>
        </div>
        
    </div>

    </>
  );
}

export default Info;