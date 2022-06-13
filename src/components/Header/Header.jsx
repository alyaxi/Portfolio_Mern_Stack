import React from 'react'
import { ReactNavbar } from 'overlay-navbar'
import logo from "../../assests/Logo.png"
import { FaUserAlt, FaSearch } from "react-icons/fa";


const Header = () => {
  return (
    <ReactNavbar 
    navColor2="rgb(27, 36, 48)"
    navColor1="white"
    logo={logo}
    burgerColorHover="rgb(129, 103, 151)"
    burgerColor="rgb(81, 85, 126)"
    logoHoverColor="rgb(81, 85, 126)"
    logoWidth="100px"
    logoHoverSize="50px"
    searchIcon={true}
    SearchIconElement={FaSearch}
    searchIconMargin="3vmax"
    nav2justifyContent="space-around"
    nav3justifyContent="space-around"
    nav1FlexDirection="row"
    nav1alignItems="center"
    link1Text="Home"
    link2Text="About"
    link3Text="Projects"
    link4Text="Contact"
    link1Url="/"
    link2Url="/about"
    link3Url="/projects"
    link4Url="/contact"
    link1ColorHover="white"
    link1Color="#1363DF"
    link1Size="1.3rem"
    link1Padding="4vmax"
    profileIcon={true}
    ProfileIconElement={FaUserAlt}
    profileIconMargin="3vmax"
    searchIconColor="#1363DF"
    profileIconColor="#1363DF"
    searchIconColorHover="white"
    profileIconColorHover="white"

    />
    
  )
}

export default Header