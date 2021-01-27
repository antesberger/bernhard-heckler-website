import { GetStaticProps } from 'next'
import Layout from '../../components/Layout'
import BasicMeta from '../../components/meta/BasicMeta'
import OpenGraphMeta from '../../components/meta/OpenGraphMeta'
import TwitterCardMeta from '../../components/meta/TwitterCardMeta'
import PostList from '../../components/PostList'
import config from '../../lib/config'
import { listPostContent, countPosts } from '../../lib/journalismus'
import { JournalismusPostContent } from '../../lib/utils'
import moment from 'moment'
import Pagination from '../../components/Pagination'

type Props = {
  posts: JournalismusPostContent[]
  pagination: {
    current: number
    pages: number
  }
}
export default function Index({ posts, pagination }: Props) {
  const url = '/journalismus'
  const title = 'Alle Reportagen und Essays'
  return (
    <Layout>
      <BasicMeta url={url} title={title} />
      <OpenGraphMeta url={url} title={title} />
      <TwitterCardMeta url={url} title={title} />

      <div>
        <ul className='container my-xxxl space-y-xxxl'>
          {posts.map((post, index) => (
            <li key={index}>
              <h1>{post.data.title}</h1>
              <h4 className='text-grey-300 -mt-sm mb-sm'>
                {moment(post.data.date).format('DD.MM.YYYY')}
              </h4>
              <p>{post.content}</p>
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
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = listPostContent(1, config.posts_per_page)
  const pagination = {
    current: 1,
    pages: Math.ceil(countPosts() / config.posts_per_page),
  }
  return {
    props: {
      posts,
      pagination,
    },
  }
}
