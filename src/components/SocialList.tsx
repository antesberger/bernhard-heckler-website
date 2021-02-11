import React from 'react'
import Mail from '../assets/mail-alt.svg'
import Twitter from '../assets/twitter-alt.svg'
import Instagram from '../assets/instagram-alt.svg'
import config from '../lib/config'

export function SocialList({}) {
  return (
    <div className='flex space-x-s justify-end'>
      <a
        title='Email'
        href={`mailto:${config.email_address}`}
        rel='noopener'
        className='p-sm fill-current text-black md:text-white'
      >
        <Mail width={24} height={24} />
      </a>
      <a
        title='Twitter'
        href={config.twitter_account}
        target='_blank'
        rel='noopener'
        className='p-sm fill-current text-black md:text-white'
      >
        <Twitter width={24} height={24} />
      </a>
      <a
        title='Instagram'
        href={config.instagram_account}
        target='_blank'
        rel='noopener'
        className='p-sm fill-current text-black md:text-white'
      >
        <Instagram width={24} height={24} />
      </a>
    </div>
  )
}
