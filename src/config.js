let config = new Object(null)

config.apiBaseUrl = process.env.API_URL || 'https://openfisca-nsw-staging.herokuapp.com'
config.changelogUrl = process.env.CHANGELOG_URL

config.pathname = process.env.PATHNAME || '/'
config.host = process.env.HOST || 'nsw-rules.herokuapp.com'
config.port = parseInt(process.env.PORT) || 80

if (process.env.MATOMO_CONFIG) {
  config.matomo = JSON.parse(process.env.MATOMO_CONFIG)
} else if (process.env.MATOMO_URL && process.env.MATOMO_SITE_ID) {
  config.matomo = {
    url: process.env.MATOMO_URL,
    siteId: process.env.MATOMO_SITE_ID,
    trackErrors: true,  // if there is a Matomo tracker, always send Legislation Explorer errors by default; if you want to override that behaviour, use the `MATOMO_CONFIG` option.
  }
}

config.ui = JSON.parse(process.env.UI_STRINGS || '{"en":{"countryName":"the development environment"}}')


export default config
