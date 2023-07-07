import mongoose, { Document, Schema } from "mongoose";

export interface IAccount extends Document {
  name: string;
  phone: string;
  email: string;
  address: string;
}

const AccountSchema: Schema<IAccount> = new Schema<IAccount>(
  {
    name: { type: String, required: true, trim: true  },
    phone: { type: String, require: true, trim: true },
    email: { type: String, required: true, trim: true, unique: true },
    address: { type: String, required: true, trim: true },
  },
  { strict: "throw" }
);

const Account = mongoose.model<IAccount>("Account", AccountSchema);

export default Account;
