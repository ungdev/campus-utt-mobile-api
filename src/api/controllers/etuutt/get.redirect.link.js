

module.exports = app => {

  app.get('/etuutt/link', async (req, res) => {

    try {
      const redirectUri = `${process.env.ETU_UTT_BASEURI}/api/oauth/authorize?client_id=${process.env.ETU_UTT_CLIENT_ID}&scopes=private_user_account&response_type=code&state=xyz`
      return res
        .status(200)
        .json({ redirectUri })
        .end()
    } catch (err) {
      return res
        .status(500)
        .json(err)
        .end()
    }
    
  })
}