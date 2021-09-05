import { withIronSession } from "next-iron-session";
import {NextApiHandler} from 'next';

export default function withSession(handler: NextApiHandler) {
  return withIronSession(handler, {
    password: "" + process.env.SECRET_COOKIE_PASSWORD,
    cookieName: "inu4g0t.next.demo",
    cookieOptions: {
      // the next line allows to use the session in non-https environments like
      // Next.js dev mode (http://localhost:3000)
      secure: process.env.NODE_ENV === "production",
    },
  });
}