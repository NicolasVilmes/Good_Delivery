import { Tenant } from "@/types/tenant";
import {
  Children,
  createContext,
  ReactNode,
  useContext,
  useState,
} from "react";

type appContextTipe = {
  tenant: Tenant | null;
  setTenant: (newTenant: Tenant) => void;
};

const defaultValues: appContextTipe = {
  tenant: null,
  setTenant: () => null,
};

const appContext = createContext<appContextTipe>(defaultValues);
export const useAppContext = () => useContext(appContext);

type Props = {
  children: ReactNode;
};

export const AppContextProvider = ({ children }: Props) => {
  const [tenant, setTenant] = useState<Tenant | null>(null);

  return (
    <appContext.Provider value={{ tenant, setTenant }}>
      {children}
    </appContext.Provider>
  );
};
