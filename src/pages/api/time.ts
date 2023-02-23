import {NextApiRequest, NextApiResponse} from "next";

export default function time(_req: NextApiRequest, res: NextApiResponse) {
  return res.status(200).send(new Date().toISOString());
}