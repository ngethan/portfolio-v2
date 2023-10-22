import { ObjectId } from "bson";
import type { NextApiRequest, NextApiResponse } from "next";

import getBlogModel from "@/models/blog";
import { requireMethod } from "@/utils/ServerUtils";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (requireMethod(req, res, "POST", "DELETE")) {
    try {
      const { id } = req.body;
      if (!id) {
        res.status(400).json({
          success: false,
          message: "No ID provided",
        });
        return;
      }

      const objectId = new ObjectId(id as string);
      const BlogModel = await getBlogModel();
      const data = await BlogModel.deleteOne({
        _id: objectId,
      });

      res.status(200).json({
        success: true,
        data,
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        message: "Something went wrong",
      });
    }
  }
}
export default handler;
