import { NextApiRequest, NextApiResponse } from "next";
import prismadb from "@/lib/prismadb";
import { without } from "lodash";
import serverAuth from "@/lib/serverAuth";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
 
  try {
    if (req.method === "POST") {
      const { currentUser } = await serverAuth(req);
      const { movieId } = req.body;
      

      const existingMovie = await prismadb.movie.findUnique({
        where: {
          id: movieId,
        },
      });

      if (!existingMovie) {
        throw new Error("Invalid id");
      }

      const user = await prismadb.user.update({
        where: {
          email: currentUser.email || "",
        },
        data: {
          favouriteIds: {
            push: movieId,
          },
        },
      });
      return res.status(200).json(user);
    }
    if (req.method === "DELETE") {
      const { currentUser } = await serverAuth(req);

      const { movieId } = req.body;
      
      const existingMovie = await prismadb.movie.findUnique({
        where: {
          id: movieId,
        },
      });

      if (!existingMovie) {
        throw new Error("Invalid id");
      }

      const updatedfavIds = without(currentUser.favouriteIds, movieId);

      const updatedUser = await prismadb.user.update({
        where: {
          email: currentUser.email || "",
        },
        data: {
          favouriteIds: updatedfavIds,
        },
      });

      return res.status(200).json(updatedUser);
    }

    return res.status(405).end();
  } catch (error) {
    console.log(error);
    return res.status(400).end();
  }
}
