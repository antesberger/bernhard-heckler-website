import Head from 'next/head'
import config from '../../lib/config'

type Props = {
  title?: string
  description?: string
  url: string
}
export default function BasicMeta({ title, description, url }: Props) {
  return (
    <Head>
      <title>
        {title ? [title, config.site_title].join(' | ') : config.site_title}
      </title>
      <meta
        name='description'
        content={description ? description : config.site_description}
      />
      <meta
        name='keywords'
        content={config.site_keywords.map((object) => object.keyword).join(',')}
      />
      <link rel='canonical' href={config.base_url + url} />
    </Head>
  )
}
