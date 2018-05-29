'use strict'

const reachableUrl = require('reachable-url')
const dnsErrors = require('dnserrors')

module.exports = async (targetUrl, opts = {}) => {
  try {
    const res = await reachableUrl(targetUrl, opts)
    const { statusCode } = res
    return statusCode
  } catch (aggregatedError) {
    const errors = Array.from(aggregatedError)
    const error = errors[errors.length - 1]
    return error.statusCode || dnsErrors(error).statusCode || 500
  }
}
