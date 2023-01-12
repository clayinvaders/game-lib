export default function handler(req, res) {
  console.log(req.body)
  const { ciPlayerId, ciMinigameId, score } = req.body

  try {
    if (!ciPlayerId || !ciMinigameId || !score)
      throw Error("Missing required param: [ciPlayerId, ciMinigameId, score]")

    res.status(200).json({ saved: "ok" })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}
