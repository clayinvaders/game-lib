# game-lib

Lib to store params extracted from querystring in sessionStorage and send a request to server once with the score of the game.

# Filter

Only querystring params starting with 'ci' will be Persisted to sessionStorage

# Install

```
npm i @clayinvaders/game-lib
```

# Use

```
const { storeParams, sendScore } = require("@clayinvaders/game-lib")

#store querystring params to sessionStorage
storeQueryParams()

#get stored querystring params
const params = getStoredQueryParams(),

#send score the the backend api
const response = await sendScore(score)

#if error
response => { error: `messageError` }

#if success
response => { saved: ok }

```

# Demo

The folder `next` contains a next app to try how it works.

Just run:

```npm install
npm run dev`

# publish

npm publish --dry-run
npm publish --access=public
```
