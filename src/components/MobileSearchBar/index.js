import React from 'react'
import './style.css'
import SearchIcon from '@mui/icons-material/Search';


export default function MobileSearchBar(){

    return(
        <div className='mobile-search-bar'>
            <SearchIcon sx={{display:"flex"}}/>
            <div className='where-to'>Where to?
                <p className='Anywhere'>Anywhere . Any week . Add guests</p>
            </div>
            
            
            </div>
    )
}