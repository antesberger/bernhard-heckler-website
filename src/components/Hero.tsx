import { SocialList } from './SocialList'
import { useState, useRef, useEffect } from 'react'

type HeroProps = {
  image_xl: string
  image_lg: string
  image_md: string
  image_loading: string
  credits?: string
  credits_url?: string
}

const Hero = ({
  image_xl,
  image_lg,
  image_md,
  image_loading,
  credits,
  credits_url,
}: HeroProps) => {
  const [imgLoaded, setImgLoaded] = useState(false)
  const imageRef = useRef<HTMLImageElement>(null)
  const loaderImageRef = useRef<HTMLImageElement>(null)
  const [heroHeight, setHeroHeight] = useState<number | null>(null)

  useEffect(() => {
    if (imageRef.current && imageRef.current.complete) {
      setImgLoaded(true)
    }
  }, [imageRef])

  useEffect(() => {
    if (loaderImageRef.current && loaderImageRef.current.complete) {
      setHeroHeight(loaderImageRef.current.height)
    }
  }, [loaderImageRef])

  useEffect(() => {
    const resizeHandler = () => {
      setHeroHeight(loaderImageRef.current.height)
    }
    window.addEventListener('resize', resizeHandler)
  }, [])

  return (
    <div id='hero' className='relative -mt-nav'>
      <div className='relative overflow-hidden' style={{ height: heroHeight }}>
        <img
          ref={imageRef}
          onLoad={() => {
            setImgLoaded(true)
          }}
          className={`relative w-full z-10 object-cover transition-all duration-300 opacity-0 ${
            imgLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          srcSet={`
          ${image_md} 768w, 
          ${image_lg} 1160w,
          ${image_xl} 1440w`}
          sizes='
          (max-width: 768px) 768px,
          (max-width: 1160px) 1160px,
          1440px'
          src={image_xl}
          alt='Bernhard Heckler Foto'
          style={{ minHeight: '500px', maxHeight: '95vh' }}
        />
        <img
          ref={loaderImageRef}
          className='absolute inset-0 w-full object-cover filter-blur'
          src={image_loading}
          alt='Bernhard Heckler Foto'
          style={{ minHeight: '500px', maxHeight: '95vh' }}
          onLoad={() => {
            setHeroHeight(loaderImageRef.current.height)
          }}
        />
      </div>
      <div className='flex'>
        <div className='md:absolute left-x bottom-xs z-10 text-black md:text-white opacity-50 w-50%'>
          <p className='m-sm md:y-xs'>
            <a
              href={credits_url}
              target='_blank'
              rel='noreferrer'
              className='inline-block text-sm'
            >
              © Fotografie: {credits}
            </a>
          </p>
        </div>
        <div className='md:absolute right-xs bottom-xs z-10 w-50%'>
          <SocialList />
        </div>
      </div>
    </div>
  )
}

export default Hero
