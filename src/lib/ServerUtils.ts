import type { NextApiRequest, NextApiResponse } from "next";

export function requireMethod(
    req: NextApiRequest,
    res: NextApiResponse,
    ...method: string[]
) {
    if (!method.includes(req.method || "")) {
        res.status(405).json({ success: false, message: "Route not valid" });
        return false;
    }
    return true;
}
