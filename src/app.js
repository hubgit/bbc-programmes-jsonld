const express = require('express')
const { episode } = require('./convert')

const app = express()

app.set('json spaces', 2)

app.get('/episode/:pid', async (req, res) => {
  try {
    res.json({
      data: await episode(req.params.pid)
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
