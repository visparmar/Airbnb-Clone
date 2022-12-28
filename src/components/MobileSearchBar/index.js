import React from 'react'
import './style.css'
import SearchIcon from '@mui/icons-material/Search';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';


export default function MobileSearchBar() {

    return (

        <div className='mobile-search-bar' >
            
            <div className='search-icon'> <SearchIcon /></div>
           

                <div className='Anywhere'>
                    <div className='where-to'>Where to?</div>
                    <span className='Anywhere-name' id='p1'>Anywhere 
                    <span className='Anywhere-dot'>.</span>  
                    <span className='Anywhere-name'>AnyWeek</span>   
                    <span className='Anywhere-dot'>.</span>
                    <span className='Anywhere-name'>AddGuests</span></span>
                    
                   
                    
                    
                </div>
                <div className='filter'><TuneOutlinedIcon   sx={{ width: 15,height:15}}/></div>

        </div>
               
           


    )
}
