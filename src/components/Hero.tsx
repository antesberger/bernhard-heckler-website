import { SocialList } from './SocialList'

type HeroProps = {
  image: string
}

const Hero = ({ image }: HeroProps) => {
  return (
    <div className='relative -mt-nav'>
      <img className='w-full' src={image} alt='Bernhard Heckler Foto' />
      <div className='absolute right-xs bottom-xs'>
        <SocialList />
      </div>
    </div>
  )
}

export default Hero
