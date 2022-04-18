import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const{id,name,img,description,price}=service;
    const navigate= useNavigate()
    const navigateCheckout= (id)=>{
       navigate(`/service/${id}`)  
    }
    return (
        // service name,price,description button added
        <div className='service '>
            <img style={{height:'300px'}} className='w-100' src={img} alt="" />
            <h2>{name}</h2>
            <p>Price:{price}</p>
            <p><small>{description}</small></p>
            <button  onClick={()=>navigateCheckout(id)} className='  button  '>Detail</button>
        </div>
    );

};

export default Service;