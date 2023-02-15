import { Tenant } from "@/types/tenant"
import { Dispatch, ReactNode } from "react";

export type DataType = {
  tenant: Tenant | null;
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
  SET_TENANT
}