/**
 * Handler for selling in store
 * @param {Request} req 
 * @param {Response} res 
 */
export default function handler(req, res) {
  res.status(200).json(req.body);
}
