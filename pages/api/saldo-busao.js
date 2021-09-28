import { getAccessToken, withApiAuthRequired } from '@auth0/nextjs-auth0';
import { query as q, Client, Paginate, Collection, Lambda, Documents, Get, Var } from 'faunadb';
export default withApiAuthRequired(async function shows(req, res) {
  try {
    const { accessToken } = await getAccessToken(req, res);
    const client = new Client({ secret: accessToken, domain: 'db.us.fauna.com' });

    const data = await client.query(
      q.Get(
        q.Match(
          q.Index('users_saldobusao') //index criado no fauna
        )
      )
    );
    console.log(data);
    res.status(200).json(data);
  } catch (error) {
    res.status(error.status || 500).json({ error: error.message });
  }
});
