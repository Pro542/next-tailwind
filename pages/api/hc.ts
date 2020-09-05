// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiResponse } from "next";

function hc(_: never, res: NextApiResponse) {
  res.statusCode = 200
  res.send('OK');
}

export default hc;