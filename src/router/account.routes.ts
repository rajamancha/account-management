import express from "express";
import accountController from "../controller/account.controller";
import { Validate } from "../middleware/validate";
import { createAccount } from "../validators/account/account.validator";

const router = express.Router();

router.get("/get-accounts", accountController.getAccount);

router.get("/get-account/:id", accountController.getAccountById);

router.post(
  "/add-account",
  Validate(createAccount),
  accountController.addAccount
);

router.put(
  "/edit-account/:id",
  Validate(createAccount),
  accountController.editAccount
);

router.delete("/remove-account/:id", accountController.removeAccount);

export default router;
