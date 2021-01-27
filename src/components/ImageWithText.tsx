import React from 'react'

type Props = {
  title: string
  text: string
  image: string
}

export default function ImageWithText({ title, text, image }: Props) {
  return (
    <div className='row'>
      <div className='col-12 md:col-4 mb-sm md:mb-0'>
        <img className='w-full' src={image} />
      </div>
      <div className='col-12 md:col-8'>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </div>
  )
}
