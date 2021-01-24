import React from 'react'
import Twitter from '../assets/twitter-alt.svg'
import Instagram from '../assets/instagram-alt.svg'
import config from '../lib/config'

export function SocialList({}) {
  return (
    <div className='flex space-x-s'>
      <a
        title='Twitter'
        href={config.twitter_account}
        target='_blank'
        rel='noopener'
      >
        <Twitter width={24} height={24} fill={'white'} />
      </a>
      <a
        title='Instagram'
        href={config.instagram_account}
        target='_blank'
        rel='noopener'
      >
        <Instagram width={24} height={24} fill={'white'} />
      </a>
    </div>
  )
}
