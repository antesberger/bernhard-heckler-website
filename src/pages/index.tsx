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
import ReactMarkdown from 'react-markdown'
import Link from 'next/link'

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
        <Hero
          image_xl={home.image_xl}
          image_lg={home.image_lg}
          image_md={home.image_md}
          image_loading={home.image_loading}
          credits={home.image_credits}
        />
      </div>

      <div className='container space-y-xxxl my-md md:my-xxxl'>
        <section>
          <h1>{home.intro_headline}</h1>
          <ReactMarkdown>{home.intro_text}</ReactMarkdown>
        </section>
      </div>

      <section className='bg-yellow-500 text-black'>
        <div className='container py-xxxl'>
          <ImageWithText
            title={featuredBookPost.data.title}
            text={featuredBookPost.content}
            image={featuredBookPost.data.image}
          />
        </div>
      </section>

      <section>
        <HighlightBlock>
          <h1>{featuredTagebuchPost.data.title}</h1>
          <h4 className='text-yellow-500 -mt-sm mb-sm'>
            {moment(featuredTagebuchPost.data.date).format('DD.MM.YYYY')}
          </h4>
          <ReactMarkdown>{featuredTagebuchPost.content}</ReactMarkdown>
          <div className='cursor-pointer flex text-yellow-500 justify-end mt-lg'>
            <a href='/tagebuch'>Mehr</a>
          </div>
        </HighlightBlock>
      </section>

      <div className='container space-y-xxxl my-xxxl'>
        <section>
          <div className='row'>
            {featuredJournalismusPosts.map((JournalismusPost, index) => (
              <div className='col-12 sm:col-6 md:col-4 my-md' key={index}>
                <Card post={JournalismusPost} />
              </div>
            ))}
          </div>
          <div className='cursor-pointer flex text-yellow-500 justify-end mt-lg'>
            <a href='/journalismus'>Mehr</a>
          </div>
        </section>
      </div>

      <div className='container mt-xxxl mb-xl '>
        <div className='flex justify-end'>
          <Link href='/impressum'>Impressum</Link>
        </div>
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
