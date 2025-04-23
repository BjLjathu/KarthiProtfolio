import React from 'react'
import LinkedIn from '../assets/linkedinblack.png'
import Twiter from '../assets/twitterblack.png'
import FaceBook from '../assets/facebookblack.png'
import Instagram from '../assets/instagramblack.png'
export const FooterSocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-5 gap-7 max-w-[1440px]  ">
      <a
        className="hover:opacity-50 transition duration-500 "
        href="https://www.linkedin.com"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src={LinkedIn} className='w-10 h-10' />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.twitter.com"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="twitter-link" src={Twiter} className='w-10 h-10' />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.facebook.com"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="facebook-link" src={FaceBook}  className='w-10 h-10'/>
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.instagram.com"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="instagram-link" src={Instagram} className='w-10 h-10' />
      </a>
    </div>
  )
}
