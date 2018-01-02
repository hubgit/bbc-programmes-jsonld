const fs = require('fs-extra')
const convert = require('../src/convert')

test('extracts data from a pid', async () => {
  const data = await convert('b083h9tr')

  const expected = fs.readJsonSync(__dirname + '/data/episode.json')

  expect(data).toEqual(expected)
})
