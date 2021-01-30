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
import HighlightBlock from '../components/HighlightBlock'
import ImageWithText from '../components/ImageWithText'
import moment from 'moment'
import { useRef } from 'react'
import Card from '../components/Card'

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
  const heroRef = useRef<HTMLDivElement | null>(null)

  return (
    <Layout heroRef={heroRef}>
      <BasicMeta url={'/'} />
      <OpenGraphMeta url={'/'} />
      <TwitterCardMeta url={'/'} />

      <div ref={heroRef}>
        <Hero image='images/bernhard_heckler_01.jpg' />
      </div>

      <div className='container space-y-xxxl my-xxxl'>
        <section>
          <h1>{home.intro_headline}</h1>
          <p>{home.intro_text}</p>
        </section>

        <section>
          <ImageWithText
            title={featuredBookPost.data.title}
            text={featuredBookPost.content}
            image={featuredBookPost.data.image}
          />
        </section>
      </div>

      <section>
        <HighlightBlock>
          <h1>{featuredTagebuchPost.data.title}</h1>
          <h4 className='text-yellow-500 -mt-sm mb-sm'>
            {moment(featuredTagebuchPost.data.date).format('DD.MM.YYYY')}
          </h4>
          <p>{featuredTagebuchPost.content}</p>
          <div className='cursor-pointer flex text-yellow-500 justify-end mt-lg'>
            <a href='/tagebuch'>Mehr</a>
          </div>
        </HighlightBlock>
      </section>

      <div className='container space-y-xxxl my-xxxl'>
        <section>
          <div className='row'>
            {featuredJournalismusPosts.map((JournalismusPost, index) => (
              <div className='col-12 sm:col-6 md:col-4' key={index}>
                <Card post={JournalismusPost} />
              </div>
            ))}
          </div>
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
