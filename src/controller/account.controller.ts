import { Request, Response } from "express";
import accountService from "../services/account.services";

const getAccount = async (req: Request, res: Response) => {
  try {
    const data = await accountService.getAccount();
    return res.status(data.code).send(data);
  } catch (error) {
    res.status(404);
    res.json({ message: "Not Found" });
  }
};

const getAccountById = async (req: Request, res: Response) => {
  try {
    const data = await accountService.getAccountById(req.params.id);
    return res.status(data.code).send(data);
  } catch (error) {
    res.status(404);
    res.json({ message: "Not Found" });
  }
};

const addAccount = async (req: Request, res: Response) => {
  try {
    const data = await accountService.addAccount(req.body);
    return res.status(data.code).send(data);
  } catch (error) {
    res.status(400);
    res.json({ message: "Bad Request" });
  }
};

const editAccount = async (req: Request, res: Response) => {
  try {
    const data = await accountService.editAccount(req.params.id, req.body);
    return res.status(data.code).send(data);
  } catch (error) {
    res.status(400);
    res.json({ message: "Bad Request" });
  }
};

const removeAccount = async (req: Request, res: Response) => {
  try {
    const data = await accountService.removeAccount(req.params.id);
    return res.status(data.code).send(data);
  } catch (error) {
    res.status(400);
    res.json({ message: "Bad Request" });
  }
};

const accountController = {
  getAccount,
  getAccountById,
  addAccount,
  editAccount,
  removeAccount,
};

export default accountController;
