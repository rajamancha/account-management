import { Request } from "express";
import Account, { IAccount } from "../models/account.model";
import { Error, Success } from "../utils/restResponse";

const getAccount = async () => {
  try {
    const data = await Account.find({});
    return Success("All accounts", data);
  } catch (error) {
    throw Error("Not Found", [], 404);
  }
};

const getAccountById = async (id: string) => {
  try {
    const data = await Account.findById(id);
    if (data) {
      return Success("Get account successfully ", data);
    } else {
      return Error("Account not found", [], 404);
    }
  } catch (error) {
    return Error("something went wrong!", [], 500);
  }
};

const addAccount = async (body: IAccount) => {
  try {
    const account = await findByEmailId(body.email);
    if (!!account && account.length) {
      return Error("This email already exist", [], 409);
    }
    const data = await Account.create(body);
    return Success("Account created successfully", data, true);
  } catch (error) {
    return Error("something went wrong!", [], 500);
  }
};

const editAccount = async (id: string, body: Request) => {
  try {
    const data = await Account.findByIdAndUpdate(id, body);
    if (data) {
      return Success("Account updated successfully", data);
    } else {
      return Error("Account not found", [], 404);
    }
  } catch (error) {
    return Error("something went wrong!", [], 500);
  }
};

const removeAccount = async (id: string) => {
  try {
    const data = await Account.findByIdAndRemove(id);
    if (data) {
      return Success("Account removed successfully", data);
    } else {
      return Error("Account not found", [], 404);
    }
  } catch (error) {
    return Error("something went wrong!", [], 500);
  }
};

const findByEmailId = async (email: string) => {
  try {
    return Account.find({ email });
  } catch (error) {
    
  }
};

const accountService = {
  getAccount,
  getAccountById,
  addAccount,
  editAccount,
  removeAccount,
};

export default accountService;
