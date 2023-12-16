import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com" target='blank' ><BsLinkedin/></a>
        <a href="https://github.com/satendragangwar" target='blank' ><AiFillGithub/></a>
        
      
    </div>
  )
}

export default HeaderSocials
