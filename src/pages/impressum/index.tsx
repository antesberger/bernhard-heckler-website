import ReactMarkdown from 'react-markdown'
import impressum from '../../lib/impressum'
import Layout from '../../components/Layout'

const Impressum: React.FC = () => {
  return (
    <Layout>
      <></>
      <div className='container space-y-xxxl my-md md:my-xxxl'>
        <section>
          <h1>{impressum.title}</h1>
          <ReactMarkdown>{impressum.body}</ReactMarkdown>
        </section>
      </div>
    </Layout>
  )
}

export default Impressum
