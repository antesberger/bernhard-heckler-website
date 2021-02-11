import { GetStaticProps } from 'next'
import Layout from '../../components/Layout'
import BasicMeta from '../../components/meta/BasicMeta'
import OpenGraphMeta from '../../components/meta/OpenGraphMeta'
import TwitterCardMeta from '../../components/meta/TwitterCardMeta'
import config from '../../lib/config'
import { listPostContent, countPosts } from '../../lib/journalismus'
import { JournalismusPostContent } from '../../lib/utils'
import moment from 'moment'
import Pagination from '../../components/Pagination'
import Card from '../../components/Card'

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

      <div className='bg-yellow-500'>
        <div className='container'>
          <div className='row'>
            {posts.map((JournalismusPost, index) => (
              <div className='col-12 sm:col-6 md:col-4 my-md' key={index}>
                <Card post={JournalismusPost} />
              </div>
            ))}
          </div>
          <div className='cursor-pointer flex text-yellow-500 justify-end mt-lg'>
            <a href='/journalismus'>Mehr</a>
          </div>

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
