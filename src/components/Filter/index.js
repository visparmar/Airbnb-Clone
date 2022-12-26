import React ,{useState} from 'react';

import './styles.css';
import {links} from '../../assets/images-links'
export default function Filter(){
    const [selectedFilter,setSelectedFilter]=useState();
    return(
        <div className='filter-div'>
           { links.map((item,i)=>(
            <div key={i} className={`links-box ${i==selectedFilter?'selected-filter':''}` }onClick={() =>setSelectedFilter(i)}>
                <img src={item.imgSrc} className='links-img'/>
                <p className={`links-label ${i==selectedFilter?'selected-label':''}`}>{item.label}</p>
                </div>
            ))}

        </div>
    );
}