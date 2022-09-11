import React from 'react'
import './nav.css'
import {AiFillHome} from 'react-icons/ai'
import {BiUser} from 'react-icons/bi'
import {BiBookAdd} from 'react-icons/bi'
import {MdMiscellaneousServices} from 'react-icons/md'
import {BiMessageDetail} from 'react-icons/bi'
import {GrWorkshop} from 'react-icons/gr'
import { useState } from 'react'

const Nav = () => {
  const [activeNav,setActiveNav] = useState('#')
  return (
    <nav>
      <a href="/" onClick={()=>setActiveNav('#')} className={activeNav==='/'?'active':''}><AiFillHome/></a>
      <a href="#about" onClick={()=>setActiveNav('#about')}  className={activeNav==='#about'?'active':''} ><BiUser/></a>
      <a href="#experience" onClick={()=>setActiveNav('#experience')}  className={activeNav==='#experience'?'active':''}><BiBookAdd/></a>
      <a href="#services" onClick={()=>setActiveNav('#services')}  className={activeNav==='#services'?'active':''}><MdMiscellaneousServices/></a>
      <a href="#portfolio" onClick={()=>setActiveNav('#portfolio')}  className={activeNav==='#portfolio'?'active':''}><GrWorkshop/></a>

      <a href="#contact" onClick={()=>setActiveNav('#contact')}  className={activeNav==='#contact'?'active':''}><BiMessageDetail/></a>


 


    </nav>
  )
}

export default Nav
