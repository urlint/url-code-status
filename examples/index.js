'use strict'

const urlStatusCode = require('..')()

const url = process.argv[2]
;(async () => {
  const status = await urlStatusCode(url)
  console.log(status)
})()
