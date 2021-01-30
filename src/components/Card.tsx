import { JournalismusPostContent } from '../lib/utils'

type CardProps = {
  // title: string
  // text: string
  // date: string
  // type: string
  // publisher: string
  // image?: string
  post: JournalismusPostContent
}

const Card = ({ post }: CardProps) => {
  return (
    <div
      className='relative border-2 border-grey-300 border-solid p-sm pb-lg'
      style={{ height: '400px' }}
    >
      {post.data.image && <img src={post.data.image} />}
      <p className='font-bold'>{post.data.publisher}</p>
      <a className='font-bold mb-xs mt-sm' href={post.data.url}>
        <h3>{post.data.title}</h3>
      </a>
      <p className='font-bold text-yellow-500'>{post.data.date}</p>
      <p className='mt-sm'>{post.content}</p>
      <p className='absolute right-0 bottom-0 bg-yellow-500 px-xs my-xs mb-0 font-bold text-white'>
        {post.data.type}
      </p>
    </div>
  )
}

export default Card
