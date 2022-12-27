import React from 'react'
import './style.css'
import SearchIcon from '@mui/icons-material/Search';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';


export default function MobileSearchBar() {

    return (

        <div className='mobile-search-bar' >
            
            <div className='search-icon'> <SearchIcon /></div>
           

                <div className='Anywhere'>
                    <div className='where-to'>Where too?</div>
                    <span className='Anywhere-name'>Anywhere 
                    <span className='Anywhere-dot'>.</span>  
                    <span className='Anywhere-name'>Any Week</span>   
                    <span className='Anywhere-dot'>.</span>
                    <span className='Anywhere-name'>Add guests</span></span>
                    
                   
                    
                    
                </div>
                <div className='filter'><TuneOutlinedIcon/></div>

        </div>



    )
}
