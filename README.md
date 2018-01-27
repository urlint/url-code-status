# url-code-status

![Last version](https://img.shields.io/github/tag/Kikobeats/url-code-status.svg?style=flat-square)
[![Build Status](https://img.shields.io/travis/Kikobeats/url-code-status/master.svg?style=flat-square)](https://travis-ci.org/Kikobeats/url-code-status)
[![Coverage Status](https://img.shields.io/coveralls/Kikobeats/url-code-status.svg?style=flat-square)](https://coveralls.io/github/Kikobeats/url-code-status)
[![Dependency status](https://img.shields.io/david/Kikobeats/url-code-status.svg?style=flat-square)](https://david-dm.org/Kikobeats/url-code-status)
[![Dev Dependencies Status](https://img.shields.io/david/dev/Kikobeats/url-code-status.svg?style=flat-square)](https://david-dm.org/Kikobeats/url-code-status#info=devDependencies)
[![NPM Status](https://img.shields.io/npm/dm/url-code-status.svg?style=flat-square)](https://www.npmjs.org/package/url-code-status)
[![Donate](https://img.shields.io/badge/donate-paypal-blue.svg?style=flat-square)](https://paypal.me/Kikobeats)

> Smart way to get the HTTP status code of an url.

## Install

```bash
$ npm install url-code-status --save
```

## Usage

```js
const getStatusCode = require('..')()

const url = process.argv[2]

;(async () => {
  const status = await getStatusCode(url)
  console.log(status)
})()
```

See more [examples](/examples).

## API

### urlCodeStatus(url, [options])

#### url

*Required*<br>
Type: `string`

The target URL.

#### options

Use it for providing [got#options](https://github.com/sindresorhus/got#goturl-options).

## License

**url-code-status** © [Kiko Beats](https://kikobeats.com), released under the [MIT](https://github.com/Kikobeats/url-code-status/blob/master/LICENSE.md) License.<br>
Authored and maintained by Kiko Beats with help from [contributors](https://github.com/Kikobeats/url-code-status/contributors).

> [kikobeats.com](https://kikobeats.com) · GitHub [@Kiko Beats](https://github.com/Kikobeats) · Twitter [@Kikobeats](https://twitter.com/Kikobeats)
