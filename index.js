'use strict'

const pAny = require('p-any')
const got = require('got')
const dnsErrors = require('dnserrors')

const createFetch = method => async (url, opts) => {
  const { statusCode } = await got[method](url, opts)
  return statusCode
}

const getStatusFromHead = createFetch('head')
const getStatusFromGet = createFetch('get')

module.exports = async (url, opts = {}) => {
  try {
    const statusCode = await pAny([
      getStatusFromHead(url, opts),
      getStatusFromGet(url, opts)
    ])
    return statusCode
  } catch (aggregatedError) {
    const errors = Array.from(aggregatedError)
    const error = errors[errors.length - 1]
    const dnsError = dnsErrors(error)
    return error.statusCode || dnsError.statusCode || 500
  }
}
