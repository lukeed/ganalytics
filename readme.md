# ganalytics [![Build Status](https://travis-ci.org/lukeed/ganalytics.svg?branch=master)](https://travis-ci.org/lukeed/ganalytics)

> Tiny, client-side module for simple tracking with Google Analytics

This module exposes three module definitions:

* **ES Module**: `dist/ganalytics.es.js`
* **CommonJS**: `dist/ganalytics.js`
* **UMD**: `dist/ganalytics.min.js`


## Install

```
$ npm install --save ganalytics
```


## Usage

```js
const GAnalytics = require('ganalytics');

const ga = new GAnalytics('UA-XXXXXXXX-X', { aid:1 });

ga.send('pageview');
ga.send('pageview', { dt:'Foobar', dp:'/foo' });

ga.send('event', { ec:'Video', ea:'Play', el:'Home Hero' });
```


## API

### GAnalytics(trackerID, options)

#### trackerID
Type: `String`

Your Google Analytics tracker ID; eg `UA-XXXXXXXX-X`

#### options.aip
Type: `Integer`<br>
Default: `0`

Anonymize the sender's IP address. See [Anonymize IP](https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#aip).

#### options.an
Type: `String`

Specifies the application's name. See [Application Name](https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#an).

#### options.aid
Type: `String`

Specifies the application identifier. See [Application ID](https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#aid).

#### options.aiid
Type: `String`

Specifies the application installer identifier. See [Application Installer ID](https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#aiid).

#### options.av
Type: `String`

Specifies the application verison. See [Application Version](https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#av).

#### options.ds
Type: `String`

Indicates the data source type of the hit; eg `web` or `app`. See [Data Source](https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#ds).

#### options.get
Type: `Function`<br>
Default: `window.fetch`

Provide a custom `GET` requestor. It needs to accept a URL as its first and only parameter.

> **Note:** By default, we use `window.fetch` which has _somewhat_ limited [browser support](http://caniuse.com/#feat=fetch).

You may want to checkout [`unfetch`](https://github.com/developit/unfetch) or provide your current AJAX/XHR library of choice, like [`axios`](https://github.com/mzabriskie/axios).

```js
import fetch from 'unfetch';
import GAnalytics from 'ganalytics';

const ga = new GAnalytics('UA-XXXXXXXX-X', { get:fetch });
```

```js
const axios = require('axios');
const GAnalytics = require('ganalytics');

const ga = new GAnalytics('UA-XXXXXXXX-X', { get:axios });
// or
const ga = new GAnalytics('UA-XXXXXXXX-X', { get:axios.get });
```

### ga.send(type, params)

#### type
Type: `String`

The type of hit to send. Must be one of these: `pageview`, `screenview`, `event`, `transaction`, `item`, `social`, `exception`, or `timing`.

#### params
Type: `Object`

The parameters to send based on the `type` of hit.

Please follow the links for each available parameter set:

* [Event](https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#events)
* [Exception](https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#exception)
* [Item](https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#ecomm)
* [Pageview](https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#content)
* [Screenview](https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#cd)
* [Social](https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#social)
* [Timing](https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#timing)
* [Transaction](https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#ecomm)

For `pageview` hits _only_, if no `params` are provided, then the `document.title` and `location.href` values will be auto-filled. This allows you to send valid requests by writing:

```js
ga.send('pageview');
// is the same as:
//=> ga.send('pageview', { dt:document.title, dl:location.href })
```


## License

MIT © [Luke Edwards](https://lukeed.com)
