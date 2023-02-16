import { User } from "@/types/user";
import { Dispatch, ReactNode } from "react";

export type DataType = {
  token: string;
  user: User | null;
}

export type actionType = {
  type: Actions;
  payload?: any;
}

export type ContextType = {
  state: DataType;
  dispatch: Dispatch<actionType>;
}

export type ProviderType = {
  children: ReactNode
}

export enum Actions {
  SET_TOKEN,
  SET_USER
}