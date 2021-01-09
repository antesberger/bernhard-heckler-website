import React from 'react'
import { PostContent } from '../lib/tagebuch'
import PostItem from './PostItem'
import Pagination from './Pagination'

type Props = {
  posts: PostContent[]
  pagination: {
    current: number
    pages: number
  }
}
export default function PostList({ posts, pagination }: Props) {
  return (
    <div>
      <div>
        <ul>
          {posts.map((it, i) => (
            <li key={i}>
              <PostItem post={it} />
            </li>
          ))}
        </ul>
        <Pagination
          current={pagination.current}
          pages={pagination.pages}
          link={{
            href: (page) => (page === 1 ? '/posts' : '/posts/page/[page]'),
            as: (page) => (page === 1 ? null : '/posts/page/' + page),
          }}
        />
      </div>
    </div>
  )
}
