
/**
 * GET /admin/spotlight/:id
 *
 * Response:
 * [
 *    { id, completed_at, name, users }, ...
 * ]
 */
module.exports = app => {

  app.get('/admin', async (req, res) => {
    return res
    .status(200)
    .end()
  })
}