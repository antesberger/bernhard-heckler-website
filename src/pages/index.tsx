import Layout from '../components/Layout'
import BasicMeta from '../components/meta/BasicMeta'
import OpenGraphMeta from '../components/meta/OpenGraphMeta'
import TwitterCardMeta from '../components/meta/TwitterCardMeta'
import { getMostRecentPost } from '../lib/tagebuch'
import { GetStaticProps } from 'next'
import { TagebuchPostContent } from '../lib/utils'
import Hero from '../components/Hero'

type IndexProps = {
  tagebuchPost: TagebuchPostContent
}

const Index: React.FC<IndexProps> = ({ tagebuchPost }: IndexProps) => {
  return (
    <Layout>
      <BasicMeta url={'/'} />
      <OpenGraphMeta url={'/'} />
      <TwitterCardMeta url={'/'} />

      <Hero image='images/bernhard_heckler_01.jpg' />

      <div className='container'>
        {tagebuchPost.data.title}
        {tagebuchPost.content}
      </div>
    </Layout>
  )
}

export default Index
export const getStaticProps: GetStaticProps = async () => {
  const tagebuchPost = getMostRecentPost()

  return {
    props: {
      tagebuchPost,
    },
  }
}
