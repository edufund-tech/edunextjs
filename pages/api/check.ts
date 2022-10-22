import {NextApiRequest, NextApiResponse} from "next";

const {name, version} = require("/package.json");

interface Info {
  name: string;
  version: string;
}

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Info>,
) {
  res.status(200).json({name: name, version: version});
}
