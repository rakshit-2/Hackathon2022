import React, { useEffect, useRef } from 'react'
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
import LoadingScreen from './../loadingScreen/index';
import Axios from 'axios';







const val=[
    {
        "diseaseId": 1,
        "diseaseName": "Fungal infection",
        "diseaseRem" : "Eat Yoghurt and Probiotics. Yoghurt and other probiotics have an ample amount of good bacteria that help stave off many fungal infections.",
        "diseaseInfo": "A fungal infection, also called mycosis, is a skin disease caused by a fungus. There are millions of species of fungi. They live in the dirt, on plants, on household surfaces, and on your skin. Sometimes, they can lead to skin problems like rashes or bumps."
    },
    {
        "diseaseId": 2,
        "diseaseName": "Hepatitis C",
        "diseaseRem" : "Silymarin.This extract of the milk thistle plant is the most popular herbal remedy for hepatitis C. Some people use it to bring down inflammation and remove toxins from the liver.",
        "diseaseInfo": "Hepatitis C is a viral infection that causes liver inflammation, sometimes leading to serious liver damage. The hepatitis C virus (HCV) spreads through contaminated blood."
    },
    {
        "diseaseId": 3,
        "diseaseName": "Hepatitis E",
        "diseaseRem" : "hepatitis E goes away on its own in about 4-6 weeks.You can make your recovery faster by taking adequate rest and eating a ballanced diet.",
        "diseaseInfo": "Hepatitis E is a liver infection caused by the hepatitis E virus (HEV). HEV is found in the stool of an infected person. It is spread when someone unknowingly ingests the virus even in microscopic amounts."
    },
    {
        "diseaseId": 4,
        "diseaseName": "Alcoholic hepatitis",
        "diseaseRem" : "There is currently no cure for alcoholic hepatitis,early symptoms can be reduced by stopping alcohol consumption.",
        "diseaseInfo": "Alcoholic hepatitis is most likely to occur in people who drink heavily over many years. However, the relationship between drinking and alcoholic hepatitis is complex. Not all heavy drinkers develop alcoholic hepatitis, and the disease can occur in people who drink only moderately."
    },
    {
        "diseaseId": 5,
        "diseaseName": "Tuberculosis",
        "diseaseRem" : "long course treatment prescribed by doctor.",
        "diseaseInfo": "Tuberculosis (TB) is a potentially serious infectious disease that mainly affects the lungs. The bacteria that cause tuberculosis are spread from person to person through tiny droplets released into the air via coughs and sneezes."
    },
    {
        "diseaseId": 6,
        "diseaseName": "Common Cold",
        "diseaseRem" : "stay hyderated , consume warm liquid diet and take adequate rest.",
        "diseaseInfo": "The common cold is a viral infection of your nose and throat (upper respiratory tract). It's usually harmless, although it might not feel that way. Many types of viruses can cause a common cold."
    },
    {
        "diseaseId": 7,
        "diseaseName": "Pneumonia",
        "diseaseRem" : "increased fluid intake, bed rest and antibiotic course.",
        "diseaseInfo": "Pneumonia is an infection that inflames the air sacs in one or both lungs. The air sacs may fill with fluid or pus (purulent material), causing cough with phlegm or pus, fever, chills, and difficulty breathing. A variety of organisms, including bacteria, viruses and fungi, can cause pneumonia"
    },
    {
        "diseaseId": 8,
        "diseaseName": "Dimorphic hemmorhoids(piles)",
        "diseaseRem" : "Warm bath with Epsom salt. Warm baths can help soothe irritation from hemorrhoids.",
        "diseaseInfo": "Hemorrhoids are swollen, enlarged veins that form inside and outside the anus and rectum. They can be painful, uncomfortable and cause rectal bleeding. Hemorrhoids are also called piles. Were all born with hemorrhoids, but at baseline, they dont bother us. Its only when they become swollen and enlarged that they produce irritating symptoms."
    },
    {
        "diseaseId": 9,
        "diseaseName": "Heart attack",
        "diseaseRem" : "consult a doctor immediately.",
        "diseaseInfo": "A heart attack occurs when an artery supplying your heart with blood and oxygen becomes blocked. Fatty deposits build up over time, forming plaques in your heart's arteries. If a plaque ruptures, a blood clot can form and block your arteries, causing a heart attack."
    },
    {
        "diseaseId": 10,
        "diseaseName": "Varicose veins",
        "diseaseRem" : "use compression stockings and eat more flavonoids.",
        "diseaseInfo": "Varicose veins are twisted, enlarged veins. Any vein that is close to the skin's surface (superficial) can become varicosed. Varicose veins most commonly affect the veins in the legs. That's because standing and walking increase the pressure in the veins of the lower body."
    },
    {
        "diseaseId": 11,
        "diseaseName": "Hypothyroidism",
        "diseaseRem" :  "The standard treatment for hypothyroidism is taking daily thyroid hormone replacement medication,intake of vitamins and probiotics.",
        "diseaseInfo": "Hypothyroidism (underactive thyroid) is a condition in which your thyroid gland doesn't produce enough of certain crucial hormones. Hypothyroidism may not cause noticeable symptoms in the early stages."
    },
    {
        "diseaseId": 12,
        "diseaseName": "Hyperthyroidism",
        "diseaseRem" : "Hyperthyroidism is often treated with antithyroid drugs, which stop the overproduction of thyroid hormone.",
        "diseaseInfo": "Hyperthyroidism (overactive thyroid) occurs when your thyroid gland produces too much of the hormone thyroxine. Hyperthyroidism can accelerate your body's metabolism, causing unintentional weight loss and a rapid or irregular heartbeat. Several treatments are available for hyperthyroidism."
    },
    {
        "diseaseId": 13,
        "diseaseName": "Hypoglycemia",
        "diseaseRem" :  "Consuming high-sugar foods or drinks, such as orange juice or regular fizzy drinks, can treat this condition.",
        "diseaseInfo": "Hypoglycemia is a condition in which your blood sugar (glucose) level is lower than normal. Glucose is your body's main energy source."
    },
    {
        "diseaseId": 14,
        "diseaseName": "Osteoarthristis",
        "diseaseRem" :  "Applying hot or cold packs to the joints can relieve the pain and symptoms of osteoarthristis.",
        "diseaseInfo": "Osteoarthritis is the most common form of arthritis, affecting millions of people worldwide. It occurs when the protective cartilage that cushions the ends of the bones wears down over time."
    },
    {
        "diseaseId": 15,
        "diseaseName": "Arthritis",
        "diseaseRem" : "Medication, physiotherapy or sometimes surgery helps reduce symptoms and improve quality of life.",
        "diseaseInfo": "Arthritis is the swelling and tenderness of one or more joints. The main symptoms of arthritis are joint pain and stiffness, which typically worsen with age. The most common types of arthritis are osteoarthritis and rheumatoid arthritis."
    },
    {
        "diseaseId": 16,
        "diseaseName": "(vertigo) Paroymsal  Positional Vertigo",
        "diseaseRem" :  "Benign paroxysmal positional vertigo may go away on its own within a few weeks or months. But, to help relieve BPPV sooner, your doctor, audiologist.",
        "diseaseInfo": "Benign paroxysmal positional vertigo (BPPV) is one of the most common causes of vertigo — the sudden sensation that you're spinning or that the inside of your head is spinning. BPPV causes brief episodes of mild to intense dizziness. It is usually triggered by specific changes in your head's position."
    },
    {
        "diseaseId": 17,
        "diseaseName": "Acne",
        "diseaseRem" : "applying apple cider vinegar on the site and taking zinc supplements improves the conditions.",
        "diseaseInfo": "Acne is a skin condition that occurs when your hair follicles become plugged with oil and dead skin cells. It causes whiteheads, blackheads or pimples. Acne is most common among teenagers, though it affects people of all ages."
    },
    {
        "diseaseId": 18,
        "diseaseName": "Urinary tract infection",
        "diseaseRem" :  "Drink plenty of fluids,increase vitamin C intake,drink cranberry juice,take probiotics,practice healthy hygiene.",
        "diseaseInfo": "A urinary tract infection (UTI) is an infection in any part of your urinary system — your kidneys, ureters, bladder and urethra. Most infections involve the lower urinary tract — the bladder and the urethra."
    },
    {
        "diseaseId": 19,
        "diseaseName": "Psoriasis",
        "diseaseRem" :  "Topical ointments, light therapy and medication can offer relief.",
        "diseaseInfo": "Psoriasis is a skin disease that causes red, itchy scaly patches, most commonly on the knees, elbows, trunk and scalp. Psoriasis is a common, long-term (chronic) disease with no cure. It tends to go through cycles, flaring for a few weeks or months, then subsiding for a while or going into remission."
    },
    {
        "diseaseId": 20,
        "diseaseName": "Hepatitis D",
        "diseaseRem" : "Consult a doctor immediately.",
        "diseaseInfo": "Hepatitis D, also known as delta hepatitis, is a liver infection caused by the hepatitis D virus (HDV). Hepatitis D only occurs in people who are also infected with the hepatitis B virus."
    },
    {
        "diseaseId": 21,
        "diseaseName": "Hepatitis B",
        "diseaseRem" : "The condition often clears up on its own. Chronic cases require medication and possibly a liver transplant.",
        "diseaseInfo": "Hepatitis B is a serious liver infection caused by the hepatitis B virus (HBV). For some people, hepatitis B infection becomes chronic, meaning it lasts more than six months. Having chronic hepatitis B increases your risk of developing liver failure, liver cancer or cirrhosis — a condition that permanently scars of the liver."
    },
    {
        "diseaseId": 22,
        "diseaseName": "Allergy",
        "diseaseRem" : "Home remedies for allergies include Saline nasal irrigation, Air filters, Butterbur ,Bromelain ,Acupuncture ,Probiotics, honey.",
        "diseaseInfo": "Allergies are your body's reaction to a normally harmless substance such as pollen, molds, animal dander, latex, certain foods and insect stings. Allergy symptoms range from mild rash or hives, itchiness, runny nose, watery/red eyes to life-threatening."
    },
    {
        "diseaseId": 23,
        "diseaseName": "hepatitis A",
        "diseaseRem" :  "Your body will clear the hepatitis A virus on its own. In most cases of hepatitis A, the liver heals within six months with no lasting damage.",
        "diseaseInfo": "Hepatitis A is a vaccine-preventable liver infection caused by the hepatitis A virus (HAV). HAV is found in the stool and blood of people who are infected. Hepatitis A is very contagious. It is spread when someone unknowingly ingests the virus — even in microscopic amounts — through close personal contact with an infected person or through eating contaminated food or drink."
    },
    {
        "diseaseId": 24,
        "diseaseName": "GERD",
        "diseaseRem" : "Chew gum,sleep on your left side, elevate the head of your bed,eat dinner early.",
        "diseaseInfo": "Gastroesophageal reflux disease (GERD) occurs when stomach acid frequently flows back into the tube connecting your mouth and stomach (esophagus). This backwash (acid reflux) can irritate the lining of your esophagus. Many people experience acid reflux from time to time."
    },
    {
        "diseaseId": 25,
        "diseaseName": "Chronic cholestasis",
        "diseaseRem" : "Cool baths, which may make the itching feel less intense , taking Oatmeal baths, creams or lotions, which may soothe the skin.",
        "diseaseInfo": "Chronic cholestatic diseases, whether occurring in infancy, childhood or adulthood, are characterized by defective bile acid transport from the liver to the intestine, which is caused by primary damage to the biliary epithelium in most cases."
    },
    {
        "diseaseId": 26,
        "diseaseName": "Drug Reaction",
        "diseaseRem" : "seek a doctor immediately.",
        "diseaseInfo": "A drug allergy is the abnormal reaction of your immune system to a medication. Any medication — over-the-counter, prescription or herbal — is capable of inducing a drug allergy. However, a drug allergy is more likely with certain medications. The most common signs and symptoms of drug allergy are hives, rash or fever."
    },
    {
        "diseaseId": 27,
        "diseaseName": "Peptic ulcer diseae",
        "diseaseRem" : "Cabbage Juice and licorice,if it is caused by bacteria, antibiotics may be required.",
        "diseaseInfo": "Peptic ulcer disease is a condition in which painful sores or ulcers develop in the lining of the stomach or the first part of the small intestine (the duodenum). Normally, a thick layer of mucus protects the stomach lining from the effect of its digestive juices."
    },
    {
        "diseaseId": 28,
        "diseaseName": "AIDS",
        "diseaseRem" : "Please seek a doctor immediately.",
        "diseaseInfo": "Acquired immunodeficiency syndrome (AIDS) is a chronic, potentially life-threatening condition caused by the human immunodeficiency virus (HIV). By damaging your immune system, HIV interferes with your body's ability to fight infection and disease."
    },
    {
        "diseaseId": 29,
        "diseaseName": "Diabetes",
        "diseaseRem" : "Exercise regularly,manage your carb intake,eat more fiber, medication might be required depending on the type.",
        "diseaseInfo": "Diabetes is a disease that occurs when your blood glucose, also called blood sugar, is too high. Blood glucose is your main source of energy and comes from the food you eat. Insulin, a hormone made by the pancreas, helps glucose from food get into your cells to be used for energy."
    },
    {
        "diseaseId": 30,
        "diseaseName": "Gastroenteritis",
        "diseaseRem" : "Rest and rehydration are the mainstays of treatment.",
        "diseaseInfo": "Gastroenteritis is an inflammation of the lining of the intestines caused by a virus, bacteria, or parasites. Viral gastroenteritis is the second most common illness in the U.S. The cause is often a norovirus infection. It spreads through contaminated food or water or by contact with an infected person."
    },
    {
        "diseaseId": 31,
        "diseaseName": "Bronchial Asthma",
        "diseaseRem" : "Treated using inhalers prescribed by doctors.",
        "diseaseInfo": "Bronchial asthma is a medical condition which causes the airway path of the lungs to swell and narrow. Due to this swelling, the air path produces excess mucus making it hard to breathe, which results in coughing, short breath, and wheezing. The disease is chronic and interferes with daily working."
    },
    {
        "diseaseId": 32,
        "diseaseName": "Hypertension",
        "diseaseRem" : "Can be treated by lowering sodium intake and maintaining good fluid ballance,if symptoms persists please consult a doctor.",
        "diseaseInfo": "High blood pressure (hypertension) is a common condition in which the long-term force of the blood against your artery walls is high enough that it may eventually cause health problems, such as heart disease."
    },
    {
        "diseaseId": 33,
        "diseaseName": "Migraine",
        "diseaseRem" : "caffeine might help,preventive and pain-relieving medication can help manage migraine headaches.",
        "diseaseInfo": "A migraine is a headache that can cause severe throbbing pain or a pulsing sensation, usually on one side of the head. It's often accompanied by nausea, vomiting, and extreme sensitivity to light and sound."
    },
    {
        "diseaseId": 34,
        "diseaseName": "Cervical spondylosis",
        "diseaseRem" : "please consult a doctor.",
        "diseaseInfo": "Cervical spondylosis is a general term for age-related wear and tear affecting the spinal disks in your neck. As the disks dehydrate and shrink, signs of osteoarthritis develop, including bony projections along the edges of bones (bone spurs). Cervical spondylosis is very common and worsens with age."
    },
    {
        "diseaseId": 35,
        "diseaseName": "Paralysis (brain hemorrhage)",
        "diseaseRem" : "immediate doctor attention required.",
        "diseaseInfo": "A hemorrhagic stroke occurs when a blood vessel in the brain bursts, spilling blood into nearby tissues. The resulting pressure and blood flow interruption cause damage that may include facial paralysis — inability to move the muscles of the face on one or both sides."
    },
    {
        "diseaseId": 36,
        "diseaseName": "Jaundice",
        "diseaseRem" : "If you have acute viral hepatitis, jaundice will go away on its own as the liver begins to heal. If a blocked bile duct is to blame, your doctor may suggest surgery to open it.",
        "diseaseInfo": "Jaundice is a condition in which the skin, whites of the eyes and mucous membranes turn yellow because of a high level of bilirubin, a yellow-orange bile pigment. Jaundice has many causes, including hepatitis, gallstones and tumors. In adults, jaundice usually doesn't need to be treated. Prevention."
    },
    {
        "diseaseId": 37,
        "diseaseName": "Malaria",
        "diseaseRem" : "Drink plenty of water to keep yourself hydrated. You can even include coconut water, lemon water and fruits that contain a high amount of water like cucumber, oranges. Water helps to flush out toxins from the body.",
        "diseaseInfo": "Malaria is a disease caused by a parasite. The parasite is spread to humans through the bites of infected mosquitoes. People who have malaria usually feel very sick with a high fever and shaking chills. While the disease is uncommon in temperate climates, malaria is still common in tropical and subtropical countries."
    },
    {
        "diseaseId": 38,
        "diseaseName": "Chicken pox",
        "diseaseRem" : "Apply calamine lotion,serve sugar-free popsicles,wear mittens to prevent scratching.",
        "diseaseInfo": "Chickenpox is an infection caused by the varicella-zoster virus. It causes an itchy rash with small, fluid-filled blisters. Chickenpox is highly contagious to people who haven't had the disease or been vaccinated against it. Today, a vaccine is available that protects children against chickenpox. Routine vaccination is recommended by the U.S. Centers for Disease Control and Prevention (CDC)."
    },
    {
        "diseaseId": 39,
        "diseaseName": "Dengue",
        "diseaseRem" : "Giloy juice is a well-known remedy for dengue fever,papaya leaf juice is a great remedy to increase platelet count.Increased water intake helps alot.",
        "diseaseInfo": "Dengue is a viral infection transmitted to humans through the bite of infected mosquitoes. The primary vectors that transmit the disease are Aedes aegypti mosquitoes and, to a lesser extent, Ae. albopictus. The virus responsible for causing dengue, is called dengue virus (DENV)."
    },
    {
        "diseaseId": 40,
        "diseaseName": "Typhoid",
        "diseaseRem" : "Increase fluid Intake,have Apple Cider Vinegar,treatment includes antibiotics.",
        "diseaseInfo": "Typhoid is a bacterial infection that can lead to a high fever, diarrhea, and vomiting. It can be fatal. It is caused by the bacteria Salmonella typhi. The infection is often passed on through contaminated food and drinking water, and it is more prevalent in places where handwashing is less frequent."
    },
    {
        "diseaseId": 41,
        "diseaseName": "Impetigo",
        "diseaseRem" : "Consult a doctor.Antibiotics shorten the infection and can help prevent spread to others.",
        "diseaseInfo": "Impetigo (im-peh-TIE-go) is a bacterial infection of the skin that is most common in young children. Doctors use antibiotics to treat impetigo. Antibiotics can also help protect others from getting sick. On This Page. Two Bacteria Can Cause Impetigo."
    }

]






const Info = (props) => 
{

    const[loading,setLoading]=useState(false);
    const[resultDisplay,setResultDisplay]=useState("none")
    function handleLoading()
    {
        setLoading(true);
        setTimeout(()=>{
            setLoading(false);
        },7000);
    }

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

    const[m1,setM1]=useState("")
    const[m2,setM2]=useState("")
    const[m3,setM3]=useState("")
    const[m4,setM4]=useState("")
    const[info1,setInfo1]=useState("")
    const[info2,setInfo2]=useState("")
    const[info3,setInfo3]=useState("")
    const[info4,setInfo4]=useState("")
    const[rem1,setRem1]=useState("")
    const[rem2,setRem2]=useState("")
    const[rem3,setRem3]=useState("")
    const[rem4,setRem4]=useState("")

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
                setM1(l[0]);
                setM2(l[1]);
                setM3(l[2]);
                setM4(l[3]);
                for(var i=0;i<val.length;i++)
                {
                    if(val[i].diseaseName===String(l[0]))
                    {
                    setInfo1(val[i].diseaseInfo);
                    setRem1(val[i].diseaseRem);
                    break;
                    }
                }
                for(var i=0;i<val.length;i++)
                {
                    if(val[i].diseaseName===String(l[1]))
                    {
                    setInfo2(val[i].diseaseInfo);
                    setRem2(val[i].diseaseRem);
                    break;
                    }
                }
                for(var i=0;i<val.length;i++)
                {
                    if(val[i].diseaseName===String(l[2]))
                    {
                    setInfo3(val[i].diseaseInfo);
                    setRem3(val[i].diseaseRem);
                    break;
                    }
                }
                for(var i=0;i<val.length;i++)
                {
                    if(val[i].diseaseName===String(l[3]))
                    {
                    setInfo4(val[i].diseaseInfo);
                    setRem4(val[i].diseaseRem);
                    break;
                    }
                }
            });
            handleLoading();
            setResultDisplay("block");
        }
    }

  
    console.log(m1,info1)
    console.log(m2,info2)
    console.log(m3,info3)
    console.log(m4,info4)


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
        {
            loading ? (
                <div class="loading-inner">
                    <LoadingScreen/>
                </div>
            ):(
                <div class="result-inner" style={{display:resultDisplay}}>
                    <div className='result-major'>
                        <div className='result-major-left'>
                            <div className='result-major-left-up'>
                                Most Accurate Model
                            </div>
                            <div className='result-major-left-bottom'>
                                {m1}
                            </div>
                        </div>
                        <div className='result-major-right'>
                            <div className='result-major-right-up'>
                                <span style={{color:"red"}}>Info{'\u00A0'}{'\u00A0'}</span>{info1}
                            </div>
                            <div className='result-major-right-down'>
                                <span style={{color:"green"}}>Sol{'\u00A0'}{'\u00A0'}</span>{rem1}
                            </div>
                        </div>
                    </div>
                    <div className='result-major'>
                        <div className='result-major-left'>
                            <div className='result-major-left-up'>
                                Average Model
                            </div>
                            <div className='result-major-left-bottom'>
                                {m2}
                            </div>
                        </div>
                        <div className='result-major-right'>
                            <div className='result-major-right-up'>
                                <span style={{color:"red"}}>Info{'\u00A0'}{'\u00A0'}</span>{info2}
                            </div>
                            <div className='result-major-right-down'>
                                <span style={{color:"green"}}>Sol{'\u00A0'}{'\u00A0'}</span>{rem2}
                            </div>
                        </div>
                    </div>
                    <div className='result-major'>
                        <div className='result-major-left'>
                            <div className='result-major-left-up'>
                                Average Model
                            </div>
                            <div className='result-major-left-bottom'>
                                {m3}
                            </div>
                        </div>
                        <div className='result-major-right'>
                            <div className='result-major-right-up'>
                                <span style={{color:"red"}}>Info{'\u00A0'}{'\u00A0'}</span>{info3}
                            </div>
                            <div className='result-major-right-down'>
                                <span style={{color:"green"}}>Sol{'\u00A0'}{'\u00A0'}</span>{rem3}
                            </div>
                        </div>
                    </div>
                    <div className='result-major'>
                        <div className='result-major-left'>
                            <div className='result-major-left-up'>
                                least Accurate Model
                            </div>
                            <div className='result-major-left-bottom'>
                                {m2}
                            </div>
                        </div>
                        <div className='result-major-right'>
                            <div className='result-major-right-up'>
                                <span style={{color:"red"}}>Info{'\u00A0'}{'\u00A0'}</span>{info4}
                            </div>
                            <div className='result-major-right-down'>
                                <span style={{color:"green"}}>Sol{'\u00A0'}{'\u00A0'}</span>{rem4}
                            </div>
                        </div>
                    </div>
                </div>
            )}
    </div>

    </>
  );
}

export default Info;