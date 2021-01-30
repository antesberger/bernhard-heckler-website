import React from 'react'
import Date from '../components/Date'
import Layout from '../components/Layout'
import BasicMeta from '../components/meta/BasicMeta'
import OpenGraphMeta from '../components/meta/OpenGraphMeta'
import TwitterCardMeta from '../components/meta/TwitterCardMeta'
import { SocialList } from '../components/SocialList'

type Props = {
  title: string
  date: Date
  slug: string
  description: string
}
export default function Index({
  title,
  date,
  slug,

  description,
}: Props) {
  return ({ children: content }) => {
    return (
      <Layout>
        <BasicMeta
          url={`/posts/${slug}`}
          title={title}
          description={description}
        />
        <TwitterCardMeta
          url={`/posts/${slug}`}
          title={title}
          description={description}
        />
        <OpenGraphMeta
          url={`/posts/${slug}`}
          title={title}
          description={description}
        />
        <div>
          <article>
            <header>
              <h1>{title}</h1>
              <div>
                <div>
                  <Date date={date} />
                </div>
              </div>
            </header>
            <div>{content}</div>
          </article>
          <footer>
            <div>
              <SocialList />
            </div>
          </footer>
        </div>
      </Layout>
    )
  }
}
