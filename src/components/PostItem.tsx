import Date from './Date'
import Link from 'next/link'
import { parseISO } from 'date-fns'
import { PostContent } from '../lib/utils'

type Props = {
  collection: 'tagebuch' | 'buecher' | 'journalismus'
  post: PostContent
}
export default function PostItem({ collection, post }: Props) {
  return (
    <Link href={`/${collection}/${post.data.slug}`}>
      <a>
        <Date date={parseISO(post.data.date)} />
        <h2>{post.data.title}</h2>
      </a>
    </Link>
  )
}
