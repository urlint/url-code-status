'use strict'

const test = require('ava')
const getStatusCode = require('..')

test('resolve GET', async t => {
  const url = 'https://kikobeats.com'
  t.deepEqual(await getStatusCode(url), 200)
})

test('resolve HEAD', async t => {
  const url = 'https://api.microlink.io'
  t.deepEqual(await getStatusCode(url), 200)
})

test('resolve redirects', async t => {
  const url = 'https://httpbin.org/redirect/6'
  t.deepEqual(await getStatusCode(url), 200)
})

test('disable follow redirects', async t => {
  const url = 'https://httpbin.org/redirect/6'
  t.deepEqual(await getStatusCode(url, { followRedirect: false }), 302)
})

test('resolve DNS errors', async t => {
  const url =
    'http://android-app/com.twitter.android/twitter/user?ref_src=twsrc^google|twcamp^androidseo|twgr^profile&screen_name=Kikobeats'
  t.deepEqual(await getStatusCode(url), 404)
})
