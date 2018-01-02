const fs = require('fs-extra')
const { episode } = require('../src/convert')

test('extracts data from a pid', async () => {
  const data = await episode('b083h9tr')

  // fs.writeJsonSync(__dirname + '/data/episode.json', data, { spaces: 2 })

  const expected = fs.readJsonSync(__dirname + '/data/episode.json')

  expect(data).toEqual(expected)
})
