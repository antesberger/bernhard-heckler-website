import { PostContent } from '../lib/tagebuch'
import Date from './Date'
import Link from 'next/link'
import { parseISO } from 'date-fns'

type Props = {
  post: PostContent
}
export default function PostItem({ post }: Props) {
  return (
    <Link href={'/tagebuch/' + post.slug}>
      <a>
        <Date date={parseISO(post.date)} />
        <h2>{post.title}</h2>
      </a>
    </Link>
  )
}
