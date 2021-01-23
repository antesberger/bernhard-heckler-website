import { GetStaticProps } from 'next'
import Layout from '../../components/Layout'
import BasicMeta from '../../components/meta/BasicMeta'
import OpenGraphMeta from '../../components/meta/OpenGraphMeta'
import TwitterCardMeta from '../../components/meta/TwitterCardMeta'
import PostList from '../../components/PostList'
import config from '../../lib/config'
import { PostContent, listPostContent, countPosts } from '../../lib/tagebuch'

type Props = {
  posts: PostContent[]
  pagination: {
    current: number
    pages: number
  }
}
export default function Index({ posts, pagination }: Props) {
  const url = '/tagebuch'
  const title = 'Alle Tagebuch Einträge'
  return (
    <Layout>
      <BasicMeta url={url} title={title} />
      <OpenGraphMeta url={url} title={title} />
      <TwitterCardMeta url={url} title={title} />
      <PostList posts={posts} pagination={pagination} />
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
