const convert = require('rdfa-jsonld')

const frameByType = type => ({
  '@context': {
    '@vocab': 'http://schema.org/'
  },
  '@type': type
})

const episode = async pid => {
  const url = 'http://www.bbc.co.uk/programmes/' + pid

  const results = await convert(url, {
    frame: frameByType('Episode'),
    expand: true
  })

  return results.find(item => item['@id'] === url)
}

module.exports = { episode }

