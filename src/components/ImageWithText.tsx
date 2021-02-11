import React from 'react'
import ReactMarkdown from 'react-markdown'
import Link from 'next/link'

type Props = {
  title: string
  text: string
  image: string
  link?: string
}

export default function ImageWithText({ title, text, image, link }: Props) {
  return (
    <div className='row'>
      <div className='col-12 md:col-4 mb-sm md:mb-0'>
        {link ? (
          <div className='text-green'>
            <a href={link} target='_black' rel='noreferrer'>
              <img className='w-full' src={image} />
            </a>
          </div>
        ) : (
          <img className='w-full' src={image} />
        )}
      </div>
      <div className='col-12 md:col-8'>
        <h1>{title}</h1>
        <div className='postbody'>
          <ReactMarkdown>{text}</ReactMarkdown>
        </div>
        {link && (
          <div className='flex justify-end my-xl text-green font-bold'>
            <a href={link} target='_black' rel='noreferrer'>
              Bestellen
            </a>
          </div>
        )}
      </div>
    </div>
  )
}
