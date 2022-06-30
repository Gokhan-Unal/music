import jwt from 'jsonwebtoken';
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from './prisma';

// HoC
// Next Auth
// A-B Testing
// edge functions in next === middleware
export const validateRoute = (handler) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const token = req.cookies.TRAX_ACCESS_TOKEN;

    if (token) {
      let user;

      try {
        const { id } = jwt.verify(token, 'wow');

        user = await prisma.user.findUnique({
          where: { id },
        });

        if (!user) {
          throw new Error('Not Real User');
        }
      } catch (error) {
        res.status(401);
        res.json({
          error: 'Not Authorized',
        });
      }

      return handler(req, res, user);
    }
  };
};
