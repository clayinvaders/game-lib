const axios = require("axios").default
const BASE_PATH = "http://localhost:3000/api/game/score"
const START_KEY = "ci"

const getStoredQueryParams = () => {
  let storageParams = {}
  Object.keys(sessionStorage).forEach((key) => {
    if (key.startsWith(START_KEY))
      storageParams[key] = sessionStorage.getItem(key)
  })
  return storageParams
}

const storeQueryParams = () => {
  const urlSearchParams = new URLSearchParams(window.location.search)
  const params = Object.fromEntries(urlSearchParams.entries())
  for (const [key, value] of urlSearchParams.entries()) {
    if (key.startsWith(START_KEY)) {
      sessionStorage.setItem(key, value)
    }
  }
}

const sendScore = async (score) => {
  const storedParams = getStoredQueryParams()
  const data = {
    ...storedParams,
    score: parseInt(score),
  }
  try {
    const resp = await axios.post(BASE_PATH, data)
    return resp.data
  } catch (error) {
    return error.response.data
  }
}

module.exports = {
  getStoredQueryParams,
  storeQueryParams,
  sendScore,
}
