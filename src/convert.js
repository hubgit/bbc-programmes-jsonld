const convert = require('rdfa-jsonld')

const buildUrl = pid => 'http://www.bbc.co.uk/programmes/' + pid

const selectByUrl = url => item => item['@id'] === url

const frameByType = type => ({
  '@context': {
    '@vocab': 'http://schema.org/'
  },
  '@type': type
})

const episode = async pid => {
  const url = buildUrl(pid)

  const results = await convert(url, {
    frame: frameByType('Episode'),
    expand: true
  })

  return results.find(selectByUrl(url))
}

module.exports = { episode }

