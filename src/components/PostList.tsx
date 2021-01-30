import React from 'react'
import Pagination from './Pagination'
import { PostContent } from '../lib/utils'
import { parseISO } from 'date-fns'
import Date from './Date'

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
          {posts.map((post, index) => (
            <li key={index}>
              <a>
                <Date date={parseISO(post.data.date)} />
                <h2>{post.data.title}</h2>
              </a>
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
