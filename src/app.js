const express = require('express')
const convert = require('rdfa-jsonld')

const app = express()

app.set('json spaces', 2)

app.get('/episode/:pid', async (req, res) => {
  const url = 'http://www.bbc.co.uk/programmes/' + req.params.pid

  try {
    const results = await convert(url, {
      frame: {
        '@context': {
          '@vocab': 'http://schema.org/'
        },
        '@type': 'Episode'
      },
      expand: true
    })

    res.json({
      episode: results.find(result => result['@id'] === url)
    })
  } catch (e) {
    res.status(500).json({
      error: e.message
    })
  }
})

app.listen(3000, () => {
  console.log('Listening on port 3000')
})
