const fs = require('fs-extra')
const convert = require('rdfa-jsonld')

test('extracts data from a pid', async () => {
  const url = 'http://www.bbc.co.uk/programmes/b083h9tr'

  const results = await convert(url, {
    frame: {
      '@context': {
        '@vocab': 'http://schema.org/'
      },
      '@type': 'Episode'
    },
    expand: true
  })

  const episode = results.find(result => result['@id'] === url)

  const expected = fs.readJsonSync(__dirname + '/data/episode.json')

  expect(episode).toEqual(expected)
})
