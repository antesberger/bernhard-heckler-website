import React from 'react'

type Props = {
  children: React.ReactNode
}

export default function HighlightBlock({ children }: Props) {
  return (
    <div className='bg-green py-xl'>
      <div className='container text-white'>{children}</div>
    </div>
  )
}
