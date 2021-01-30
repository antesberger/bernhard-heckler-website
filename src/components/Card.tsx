import { JournalismusPostContent } from '../lib/utils'
import moment from 'moment'

type CardProps = {
  post: JournalismusPostContent
}

const Card = ({ post }: CardProps) => {
  return (
    <a
      href={post.data.url}
      className='group relative border-2 border-grey-300 border-solid overflow-hidden'
      style={{ height: '400px' }}
    >
      {post.data.image && (
        <img
          src={post.data.image}
          style={{ height: '150px' }}
          className='w-full object-cover max-w-none transition-all group-hover:w-110% group-hover:-mx-5%'
        />
      )}
      <div className='p-sm pb-lg'>
        <div className='row'>
          <div className='col-6'>
            <p className='font-bold'>{post.data.publisher}</p>
          </div>
          <div className='col-6'>
            <p className='font-bold text-yellow-500 flex justify-end'>
              {moment(post.data.date).format('DD.MM.YY')}
            </p>
          </div>
        </div>
        <h3 className='font-bold mb-xs mt-sm'>{post.data.title}</h3>
        <p
          className={`mt-sm ${
            post.data.image ? 'truncate-3-lines' : 'truncate-8-lines'
          }`}
        >
          {post.content}
        </p>
        <p className='absolute right-0 bottom-0 bg-yellow-500 px-xs my-xs mb-0 font-bold text-white'>
          {post.data.type}
        </p>
      </div>
    </a>
  )
}

export default Card
