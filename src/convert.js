const jsonld = require('jsonld')
const parser = require('jsonld-rdfa-parser')

jsonld.registerRDFParser('text/html', parser)

module.exports = async pid => {
  const url = 'http://www.bbc.co.uk/programmes/' + pid

  const data = await jsonld.promises.fromRDF(url, {
    format: 'text/html'
  })

  const framed = await jsonld.promises.frame(data, {
    '@context': {
      '@vocab': 'http://schema.org/'
    },
    '@type': 'Episode'
  })

  const expanded = await jsonld.promises.expand(framed)

  return expanded.find(item => item['@id'] === url)
}
