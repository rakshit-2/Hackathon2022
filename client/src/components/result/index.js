import React from 'react';
import './index.css';
import { useHistory } from 'react-router';
import { useState } from 'react';

const val=[
  {
      "diseaseId": 1,
      "diseaseName": "Fungal Infection",
      "diseaseInfo": "A fungal infection, also called mycosis, is a skin disease caused by a fungus. There are millions of species of fungi. They live in the dirt, on plants, on household surfaces, and on your skin. Sometimes, they can lead to skin problems like rashes or bumps."
  },
  {
      "diseaseId": 2,
      "diseaseName": "hepatitis C",
      "diseaseInfo": "Hepatitis C is a viral infection that causes liver inflammation, sometimes leading to serious liver damage. The hepatitis C virus (HCV) spreads through contaminated blood."
  },
  {
      "diseaseId": 3,
      "diseaseName": "hepatitis E",
      "diseaseInfo": "Hepatitis E is a liver infection caused by the hepatitis E virus (HEV). HEV is found in the stool of an infected person. It is spread when someone unknowingly ingests the virus even in microscopic amounts."
  },
  {
      "diseaseId": 4,
      "diseaseName": "Alcoholic Hepatitis",
      "diseaseInfo": "Alcoholic hepatitis is most likely to occur in people who drink heavily over many years. However, the relationship between drinking and alcoholic hepatitis is complex. Not all heavy drinkers develop alcoholic hepatitis, and the disease can occur in people who drink only moderately."
  },
  {
      "diseaseId": 5,
      "diseaseName": "Tuberculosis",
      "diseaseInfo": "Tuberculosis (TB) is a potentially serious infectious disease that mainly affects the lungs. The bacteria that cause tuberculosis are spread from person to person through tiny droplets released into the air via coughs and sneezes."
  },
  {
      "diseaseId": 6,
      "diseaseName": "Common Cold",
      "diseaseInfo": "The common cold is a viral infection of your nose and throat (upper respiratory tract). It's usually harmless, although it might not feel that way. Many types of viruses can cause a common cold."
  },
  {
      "diseaseId": 7,
      "diseaseName": "Pneumonia",
      "diseaseInfo": "Pneumonia is an infection that inflames the air sacs in one or both lungs. The air sacs may fill with fluid or pus (purulent material), causing cough with phlegm or pus, fever, chills, and difficulty breathing. A variety of organisms, including bacteria, viruses and fungi, can cause pneumonia"
  },
  {
      "diseaseId": 8,
      "diseaseName": "Dimorphic Hemmorhoids(piles)",
      "diseaseInfo": "Hemorrhoids are swollen, enlarged veins that form inside and outside the anus and rectum. They can be painful, uncomfortable and cause rectal bleeding. Hemorrhoids are also called piles. Were all born with hemorrhoids, but at baseline, they dont bother us. Its only when they become swollen and enlarged that they produce irritating symptoms."
  },
  {
      "diseaseId": 9,
      "diseaseName": "Heart Attack",
      "diseaseInfo": "A heart attack occurs when an artery supplying your heart with blood and oxygen becomes blocked. Fatty deposits build up over time, forming plaques in your heart's arteries. If a plaque ruptures, a blood clot can form and block your arteries, causing a heart attack."
  },
  {
      "diseaseId": 10,
      "diseaseName": "Varicose Veins",
      "diseaseInfo": "Varicose veins are twisted, enlarged veins. Any vein that is close to the skin's surface (superficial) can become varicosed. Varicose veins most commonly affect the veins in the legs. That's because standing and walking increase the pressure in the veins of the lower body."
  },
  {
      "diseaseId": 11,
      "diseaseName": "Hypothyroidism",
      "diseaseInfo": "Hypothyroidism (underactive thyroid) is a condition in which your thyroid gland doesn't produce enough of certain crucial hormones. Hypothyroidism may not cause noticeable symptoms in the early stages."
  },
  {
      "diseaseId": 12,
      "diseaseName": "Hyperthyroidism",
      "diseaseInfo": "Hyperthyroidism (overactive thyroid) occurs when your thyroid gland produces too much of the hormone thyroxine. Hyperthyroidism can accelerate your body's metabolism, causing unintentional weight loss and a rapid or irregular heartbeat. Several treatments are available for hyperthyroidism."
  },
  {
      "diseaseId": 13,
      "diseaseName": "Hypoglycemia",
      "diseaseInfo": "Hypoglycemia is a condition in which your blood sugar (glucose) level is lower than normal. Glucose is your body's main energy source."
  },
  {
      "diseaseId": 14,
      "diseaseName": "Osteoarthristis",
      "diseaseInfo": "Osteoarthritis is the most common form of arthritis, affecting millions of people worldwide. It occurs when the protective cartilage that cushions the ends of the bones wears down over time."
  },
  {
      "diseaseId": 15,
      "diseaseName": "Arthritis",
      "diseaseInfo": "Arthritis is the swelling and tenderness of one or more joints. The main symptoms of arthritis are joint pain and stiffness, which typically worsen with age. The most common types of arthritis are osteoarthritis and rheumatoid arthritis."
  },
  {
      "diseaseId": 16,
      "diseaseName": "Paroymsal Positional Vertigo",
      "diseaseInfo": "Benign paroxysmal positional vertigo (BPPV) is one of the most common causes of vertigo — the sudden sensation that you're spinning or that the inside of your head is spinning. BPPV causes brief episodes of mild to intense dizziness. It is usually triggered by specific changes in your head's position."
  },
  {
      "diseaseId": 17,
      "diseaseName": "Acne",
      "diseaseInfo": "Acne is a skin condition that occurs when your hair follicles become plugged with oil and dead skin cells. It causes whiteheads, blackheads or pimples. Acne is most common among teenagers, though it affects people of all ages."
  },
  {
      "diseaseId": 18,
      "diseaseName": "Urinary Tract Infection",
      "diseaseInfo": "A urinary tract infection (UTI) is an infection in any part of your urinary system — your kidneys, ureters, bladder and urethra. Most infections involve the lower urinary tract — the bladder and the urethra."
  },
  {
      "diseaseId": 19,
      "diseaseName": "Psoriasis",
      "diseaseInfo": "Psoriasis is a skin disease that causes red, itchy scaly patches, most commonly on the knees, elbows, trunk and scalp. Psoriasis is a common, long-term (chronic) disease with no cure. It tends to go through cycles, flaring for a few weeks or months, then subsiding for a while or going into remission."
  },
  {
      "diseaseId": 20,
      "diseaseName": "hepatitis D",
      "diseaseInfo": "Hepatitis D, also known as delta hepatitis, is a liver infection caused by the hepatitis D virus (HDV). Hepatitis D only occurs in people who are also infected with the hepatitis B virus."
  },
  {
      "diseaseId": 21,
      "diseaseName": "hepatitis B",
      "diseaseInfo": "Hepatitis B is a serious liver infection caused by the hepatitis B virus (HBV). For some people, hepatitis B infection becomes chronic, meaning it lasts more than six months. Having chronic hepatitis B increases your risk of developing liver failure, liver cancer or cirrhosis — a condition that permanently scars of the liver."
  },
  {
      "diseaseId": 22,
      "diseaseName": "Allergy",
      "diseaseInfo": "Allergies are your body's reaction to a normally harmless substance such as pollen, molds, animal dander, latex, certain foods and insect stings. Allergy symptoms range from mild rash or hives, itchiness, runny nose, watery/red eyes to life-threatening."
  },
  {
      "diseaseId": 23,
      "diseaseName": "hepatitis A",
      "diseaseInfo": "Hepatitis A is a vaccine-preventable liver infection caused by the hepatitis A virus (HAV). HAV is found in the stool and blood of people who are infected. Hepatitis A is very contagious. It is spread when someone unknowingly ingests the virus — even in microscopic amounts — through close personal contact with an infected person or through eating contaminated food or drink."
  },
  {
      "diseaseId": 24,
      "diseaseName": "GERD",
      "diseaseInfo": "Gastroesophageal reflux disease (GERD) occurs when stomach acid frequently flows back into the tube connecting your mouth and stomach (esophagus). This backwash (acid reflux) can irritate the lining of your esophagus. Many people experience acid reflux from time to time."
  },
  {
      "diseaseId": 25,
      "diseaseName": "Chronic Cholestasis",
      "diseaseInfo": "Chronic cholestatic diseases, whether occurring in infancy, childhood or adulthood, are characterized by defective bile acid transport from the liver to the intestine, which is caused by primary damage to the biliary epithelium in most cases."
  },
  {
      "diseaseId": 26,
      "diseaseName": "Drug Reaction",
      "diseaseInfo": "A drug allergy is the abnormal reaction of your immune system to a medication. Any medication — over-the-counter, prescription or herbal — is capable of inducing a drug allergy. However, a drug allergy is more likely with certain medications. The most common signs and symptoms of drug allergy are hives, rash or fever."
  },
  {
      "diseaseId": 27,
      "diseaseName": "Peptic Ulcer Diseae",
      "diseaseInfo": "Peptic ulcer disease is a condition in which painful sores or ulcers develop in the lining of the stomach or the first part of the small intestine (the duodenum). Normally, a thick layer of mucus protects the stomach lining from the effect of its digestive juices."
  },
  {
      "diseaseId": 28,
      "diseaseName": "AIDS",
      "diseaseInfo": "Acquired immunodeficiency syndrome (AIDS) is a chronic, potentially life-threatening condition caused by the human immunodeficiency virus (HIV). By damaging your immune system, HIV interferes with your body's ability to fight infection and disease."
  },
  {
      "diseaseId": 29,
      "diseaseName": "Diabetes",
      "diseaseInfo": "Diabetes is a disease that occurs when your blood glucose, also called blood sugar, is too high. Blood glucose is your main source of energy and comes from the food you eat. Insulin, a hormone made by the pancreas, helps glucose from food get into your cells to be used for energy."
  },
  {
      "diseaseId": 30,
      "diseaseName": "Gastroenteritis",
      "diseaseInfo": "Gastroenteritis is an inflammation of the lining of the intestines caused by a virus, bacteria, or parasites. Viral gastroenteritis is the second most common illness in the U.S. The cause is often a norovirus infection. It spreads through contaminated food or water or by contact with an infected person."
  },
  {
      "diseaseId": 31,
      "diseaseName": "Bronchial Asthma",
      "diseaseInfo": "Bronchial asthma is a medical condition which causes the airway path of the lungs to swell and narrow. Due to this swelling, the air path produces excess mucus making it hard to breathe, which results in coughing, short breath, and wheezing. The disease is chronic and interferes with daily working."
  },
  {
      "diseaseId": 32,
      "diseaseName": "Hypertension",
      "diseaseInfo": "High blood pressure (hypertension) is a common condition in which the long-term force of the blood against your artery walls is high enough that it may eventually cause health problems, such as heart disease."
  },
  {
      "diseaseId": 33,
      "diseaseName": "Migraine",
      "diseaseInfo": "A migraine is a headache that can cause severe throbbing pain or a pulsing sensation, usually on one side of the head. It's often accompanied by nausea, vomiting, and extreme sensitivity to light and sound."
  },
  {
      "diseaseId": 34,
      "diseaseName": "Cervical Spondylosis",
      "diseaseInfo": "Cervical spondylosis is a general term for age-related wear and tear affecting the spinal disks in your neck. As the disks dehydrate and shrink, signs of osteoarthritis develop, including bony projections along the edges of bones (bone spurs). Cervical spondylosis is very common and worsens with age."
  },
  {
      "diseaseId": 35,
      "diseaseName": "Paralysis (brain hemorrhage)",
      "diseaseInfo": "A hemorrhagic stroke occurs when a blood vessel in the brain bursts, spilling blood into nearby tissues. The resulting pressure and blood flow interruption cause damage that may include facial paralysis — inability to move the muscles of the face on one or both sides."
  },
  {
      "diseaseId": 36,
      "diseaseName": "Jaundice",
      "diseaseInfo": "Jaundice is a condition in which the skin, whites of the eyes and mucous membranes turn yellow because of a high level of bilirubin, a yellow-orange bile pigment. Jaundice has many causes, including hepatitis, gallstones and tumors. In adults, jaundice usually doesn't need to be treated. Prevention."
  },
  {
      "diseaseId": 37,
      "diseaseName": "Malaria",
      "diseaseInfo": "Malaria is a disease caused by a parasite. The parasite is spread to humans through the bites of infected mosquitoes. People who have malaria usually feel very sick with a high fever and shaking chills. While the disease is uncommon in temperate climates, malaria is still common in tropical and subtropical countries."
  },
  {
      "diseaseId": 38,
      "diseaseName": "Chicken pox",
      "diseaseInfo": "Chickenpox is an infection caused by the varicella-zoster virus. It causes an itchy rash with small, fluid-filled blisters. Chickenpox is highly contagious to people who haven't had the disease or been vaccinated against it. Today, a vaccine is available that protects children against chickenpox. Routine vaccination is recommended by the U.S. Centers for Disease Control and Prevention (CDC)."
  },
  {
      "diseaseId": 39,
      "diseaseName": "Dengue",
      "diseaseInfo": "Dengue is a viral infection transmitted to humans through the bite of infected mosquitoes. The primary vectors that transmit the disease are Aedes aegypti mosquitoes and, to a lesser extent, Ae. albopictus. The virus responsible for causing dengue, is called dengue virus (DENV)."
  },
  {
      "diseaseId": 40,
      "diseaseName": "Typhoid",
      "diseaseInfo": "Typhoid is a bacterial infection that can lead to a high fever, diarrhea, and vomiting. It can be fatal. It is caused by the bacteria Salmonella typhi. The infection is often passed on through contaminated food and drinking water, and it is more prevalent in places where handwashing is less frequent."
  },
  {
      "diseaseId": 41,
      "diseaseName": "Impetigo",
      "diseaseInfo": "Impetigo (im-peh-TIE-go) is a bacterial infection of the skin that is most common in young children. Doctors use antibiotics to treat impetigo. Antibiotics can also help protect others from getting sick. On This Page. Two Bacteria Can Cause Impetigo."
  }

]



const Result = (props) => 
{
  const[info1,setInfo1]=useState("")
  const[info2,setInfo2]=useState("")
  const[info3,setInfo3]=useState("")
  const[info4,setInfo4]=useState("")


  function display(m1,m2,m3,m4)
  {
    for(var i=0;i<val.length;i++)
    {
      if(val[i].diseaseName===String(m1))
      {
        setInfo1(val[i].diseaseInfo);
        break;
      }
    }
    for(var i=0;i<val.length;i++)
    {
      if(val[i].diseaseName===String(m2))
      {
        setInfo2(val[i].diseaseInfo);
        break;
      }
    }
    for(var i=0;i<val.length;i++)
    {
      if(val[i].diseaseName===String(m3))
      {
        setInfo3(val[i].diseaseInfo);
        break;
      }
    }
    for(var i=0;i<val.length;i++)
    {
      if(val[i].diseaseName===String(m4))
      {
        setInfo4(val[i].diseaseInfo);
        break;
      }
    }
  }


  console.log(props.m1,info1)
  console.log(props.m2,info2)
  console.log(props.m3,info3)
  console.log(props.m4,info4)


  return (
    <>
    <div className='result-outer'>
        <div class="info-button-outer">
            <div className='info-button' onClick={()=>{display(props.m1,props.m2,props.m3,props.m4)}}>
              Get Pridctions
            </div>
        </div>
        <div class="result-inner">
            <div className='result-major'>
                <div className='result-major-left'>
                    {props.m4}
                </div>
                <div className='result-major-right'>
                    {info4}
                </div>
            </div>
            <div className='result-major'>
                <div className='result-major-left'>
                    {props.m1}
                </div>
                <div className='result-major-right'>
                    {info1}
                </div>
            </div>
            <div className='result-major'>
                <div className='result-major-left'>
                    {props.m2}
                </div>
                <div className='result-major-right'>
                    {info2}
                </div>
            </div>
            <div className='result-major'>
                <div className='result-major-left'>
                    {props.m3}
                </div>
                <div className='result-major-right'>
                    {info3}
                </div>
            </div>
        </div>
    </div>
    </>
  );
}

export default Result;