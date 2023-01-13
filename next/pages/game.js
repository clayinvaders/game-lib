import Head from "next/head"
import Image from "next/image"
import { useEffect, useState } from "react"
import styles from "../styles/Home.module.css"
const {
  getStoredQueryParams,
  storeQueryParams,
  sendScore,
} = require("@clayinvaders/game-lib")

export default function Home() {
  const [score, setScore] = useState(0)
  const [params, setParams] = useState([])
  const [response, setResponse] = useState()

  useEffect(() => {
    storeQueryParams()
    handleStoredParams()
  }, [])

  const handleStoredParams = async () => {
    const p = getStoredQueryParams()
    setParams(p)
  }

  const handleSendScore = async () => {
    const response = await sendScore(score)
    setResponse(response)

    setTimeout(() => setResponse(null), 15000)
  }

  const handleSetScore = async (event) => {
    setScore(event.target.value)
  }

  return (
    <>
      <Head>
        <title>Clayinvaders Game Lib</title>
        <meta
          name="description"
          content="Next App to test clayinvaders Game Lib"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p className={styles.section}>
            Click the buttons to read the queryParams that starts with ci&nbsp;
            <code className={styles.code}>
              i.e. ciPlayerId, ciMinigameId, etc
            </code>
          </p>
          <br />
          <p className={styles.section}>
            <button onClick={() => handleStoredParams()}>Get Params</button>
          </p>
          <br />
          <p className={styles.section}>
            <input name="score" value={score} onChange={handleSetScore} />
            <button onClick={() => handleSendScore()}>Send Score</button>
          </p>
          <br />
          {response && (
            <p className={styles.section}>
              RESPONSE: {JSON.stringify(response)}
            </p>
          )}
          {params && (
            <p className={styles.section}>PARAMS: {JSON.stringify(params)}</p>
          )}
        </div>
      </main>
    </>
  )
}
