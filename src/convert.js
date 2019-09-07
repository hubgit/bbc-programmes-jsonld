const convert = require('rdfa-jsonld')

const episode = async pid => {
  const url = 'http://www.bbc.co.uk/programmes/' + pid

  const results = await convert(url, {
    frame: { '@type': 'http://schema.org/Episode' },
    expand: true
  })

  return results.find(item => item['@id'] === url)
}

module.exports = { episode }

