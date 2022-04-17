import React from 'react';
import './index.css';
import { useState } from 'react';
import section1image1 from './../../images/section1 4.svg';
import section1image2 from './../../images/section1 1.svg';
import section1image3 from './../../images/section1 2.svg';


const HomeSection = (props) =>{
    return (
        <>
         <div className='section1'>
            <div className='section1-left'>
                <img src={section1image1} className='section1-left-image'/>
            </div>
            <div className='seaction1-right'>
                <div className='section1-right-heading'>
                    One Click Checkup
                </div>
                <div className='section1-right-body'>
                    Fill the survay form and get the accurate health condition 
                </div>
            </div>
        </div>
        <div className='section1'>
            <div className='section1-left'>
                <div className='section1-right-heading'>
                    One Click Checkup
                </div>
                <div className='section1-right-body'>
                    Fill the survay form and get the accurate health condition 
                </div>
            </div>
            <div className='seaction1-right'>
                <img src={section1image2} className='section1-left-image'/>
            </div>
        </div>
        <div className='section1'>
            <div className='section1-left'>
                <img src={section1image3} className='section1-left-image'/>
            </div>
            <div className='seaction1-right'>
                <div className='section1-right-heading'>
                    One Click Checkup
                </div>
                <div className='section1-right-body'>
                    Fill the survay form and get the accurate health condition 
                </div>
            </div>
        </div>
        <div className='section1'>
            <div className='section1-left'>
                <div className='section1-right-heading'>
                    Prevention is better than Cure
                </div>
                <div className='section1-right-body'>
                    Prevention is better than cure.
                </div>
            </div>
            <div className='seaction1-right'>
                <iframe width="885" height="498" src="https://www.youtube.com/embed/gIa_0h3BE2k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
        </>
    );
}
export default HomeSection;