import { BlogPosting } from 'schema-dts'
import { jsonLdScriptProps } from 'react-schemaorg'
import config from '../../lib/config'
import { formatISO } from 'date-fns'
import Head from 'next/head'

type Props = {
  url: string
  title: string
  date: Date
  image?: string
  description?: string
}
export default function JsonLdMeta({
  url,
  title,
  date,
  image,
  description,
}: Props) {
  return (
    <Head>
      <script
        {...jsonLdScriptProps<BlogPosting>({
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          mainEntityOfPage: config.base_url + url,
          headline: title,
          datePublished: formatISO(date),
          image: image,
          description: description,
        })}
      />
    </Head>
  )
}
