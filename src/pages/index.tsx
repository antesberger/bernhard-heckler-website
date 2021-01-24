import Layout from '../components/Layout'
import BasicMeta from '../components/meta/BasicMeta'
import OpenGraphMeta from '../components/meta/OpenGraphMeta'
import TwitterCardMeta from '../components/meta/TwitterCardMeta'
import { getMostRecentTagebuchPost } from '../lib/tagebuch'
import { GetStaticProps } from 'next'
import Hero from '../components/Hero'
import {
  TagebuchPostContent,
  BookPostContent,
  JournalismusPostContent,
} from '../lib/utils'
import { getMostRecentBookPost } from '../lib/books'
import { getMostRecentJournalismusPost } from '../lib/journalismus'
import home from '../lib/home'

type IndexProps = {
  featuredBookPost: BookPostContent
  featuredTagebuchPost: TagebuchPostContent
  featuredJournalismusPosts: JournalismusPostContent[]
}

const Index: React.FC<IndexProps> = ({
  featuredBookPost,
  featuredTagebuchPost,
  featuredJournalismusPosts,
}: IndexProps) => {
  return (
    <Layout>
      <BasicMeta url={'/'} />
      <OpenGraphMeta url={'/'} />
      <TwitterCardMeta url={'/'} />

      <Hero image='images/bernhard_heckler_01.jpg' />

      <div className='container space-y-lg my-lg'>
        <section>
          <h1>{home.intro_headline}</h1>
          <p>{home.intro_text}</p>
        </section>

        <section>
          <h1>{featuredBookPost.data.title}</h1>
          <p>{featuredBookPost.content}</p>
        </section>

        <section>
          <h1>{featuredTagebuchPost.data.title}</h1>
          <p>{featuredTagebuchPost.content}</p>
        </section>

        <section>
          <ul>
            {featuredJournalismusPosts.map((JournalismusPost, index) => (
              <li key={index}>
                <h2>{JournalismusPost.data.title}</h2>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </Layout>
  )
}

export default Index
export const getStaticProps: GetStaticProps = async () => {
  const featuredBookPost = getMostRecentBookPost(1)[0]
  const featuredTagebuchPost = getMostRecentTagebuchPost(1)[0]
  const featuredJournalismusPosts = getMostRecentJournalismusPost(3)

  return {
    props: {
      featuredBookPost,
      featuredTagebuchPost,
      featuredJournalismusPosts,
    },
  }
}
