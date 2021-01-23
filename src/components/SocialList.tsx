import React from 'react'
import Twitter from '../assets/twitter-alt.svg'
import Instagram from '../assets/instagram-alt.svg'
import config from '../lib/config'

export function SocialList({}) {
  return (
    <div>
      <a
        title='Twitter'
        href={config.twitter_account}
        target='_blank'
        rel='noopener'
      >
        <Twitter width={24} height={24} fill={'#222'} />
      </a>
      <a
        title='Instagram'
        href={config.instagram_account}
        target='_blank'
        rel='noopener'
      >
        <Instagram width={24} height={24} fill={'#222'} />
      </a>
    </div>
  )
}
