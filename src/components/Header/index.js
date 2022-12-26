import React from 'react'
import './styles.css'
import logo from '../../assets/logo/long-logo.png'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import BasicMenu from "./Profilemenu.js";
import SimpleBottomNavigation from './BottomNav.js'
import MobileSearchBar from '../MobileSearchBar/index.js'

function Header(){
    return(
<div className='navbar'>
    <img src={logo} alt="logo" className='navbar-logo'/>

    <div className='search-bar'>
       <div className='search-bar-text'>Anywhere  </div>
       <div className='search-bar-text'>Any week   </div>
       <div className='search-bar-text2'>Add guests </div>
       <SearchRoundedIcon className='search-bar-icon'/>
    </div>
    <div className='profile-container'>
        <div className='airbnb-your-home'>Airbnb your home</div>
        <div className='airbnb-your-home'>
            <LanguageRoundedIcon sx={{fontSize:"1.3 rem"}}/>
            </div>
        <div className='profile-div'>
            <BasicMenu />
        </div>
    </div>
   
    <MobileSearchBar/>
   < SimpleBottomNavigation/>
    </div>


    )
}

export default Header;