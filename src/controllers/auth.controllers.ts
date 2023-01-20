import { Request, Response } from "express";
import { authService } from "../services/auth.services";

export const login = (req: Request, res: Response) => {
  try {
    const response = authService(req.body);

    res.send(response);
  } catch (error) {
    return res.status(500).json(error);
  }
};
