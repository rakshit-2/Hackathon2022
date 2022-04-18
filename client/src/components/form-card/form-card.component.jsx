import React from 'react'

// import { useNavigate } from 'react-router-dom';
import './form-card.styles.scss';

const FormCard = ({title, imageUrl, linkUrl}) =>{
    // let navigate = useNavigate();
    return(    
        <div className='menu-item'
            // onClick = {
            //     () => { 
            //         if(linkUrl === '/skin'){
            //             navigate("/hats");
            //         }
            //     }}

            // onClick={() => { navigate("/disease") }}
                >
            <div className="background-image" style={{
            backgroundImage: `url(${imageUrl})`
            }}
            />
            <div className="content" >
                <h1 className="title">{title.toUpperCase() }</h1>    
            </div>
        </div>    
    );
}
export default FormCard;