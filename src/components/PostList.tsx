import React from 'react'
import PostItem from './PostItem'
import Pagination from './Pagination'
import { PostContent } from '../lib/utils'

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
              <PostItem post={it} collection='journalismus' />
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
