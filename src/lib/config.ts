import config from '../../general_config/config.json'

type Config = {
  readonly base_url: string
  readonly site_title: string
  readonly site_description: string
  readonly site_keywords: { keyword: string }[]
  readonly posts_per_page: number
  readonly email_address: string
  readonly twitter_account: string
  readonly instagram_account: string
  readonly tagebuch_navigation: string
  readonly journalismus_navigation: string
}

export default config as Config
