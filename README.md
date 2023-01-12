# game-lib

# Install

npm i @clayinvaders/game-lib

# Use

```
const { storeParams, sendScore } = require("@clayinvaders/game-lib")

#store query params to localStorage
storeParams()

#send score the the backend api
sendScore(12345)
```

# publish

npm publish --dry-run
npm publish --access=public
