import Layout from '../components/Layout'
import BasicMeta from '../components/meta/BasicMeta'
import OpenGraphMeta from '../components/meta/OpenGraphMeta'
import TwitterCardMeta from '../components/meta/TwitterCardMeta'
import { SocialList } from '../components/SocialList'
import { getMostRecentPost } from '../lib/tagebuch'
import { GetStaticProps } from 'next'

export default function Index({ tagebuchPost }) {
  return (
    <Layout>
      <BasicMeta url={'/'} />
      <OpenGraphMeta url={'/'} />
      <TwitterCardMeta url={'/'} />

      <img className='w-full' src='images/bernhard_heckler_01.jpg'></img>
      <SocialList />

      <div className='container'>
        {tagebuchPost.title}
        {tagebuchPost.body}
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const tagebuchPost = getMostRecentPost()

  return {
    props: {
      tagebuchPost,
    },
  }
}
