import type { NextApiRequest, NextApiResponse } from 'next'
import type {UserInfo} from '../../../lib/types/user'

const fakeDate : { [name: string]: string }  = {
    "1": "John",
    "2": "Marry"
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<UserInfo>
) {
  console.log("lol")
  const { id  } = req.query
  res.status(200).json({ name: fakeDate[id as string] })
}
