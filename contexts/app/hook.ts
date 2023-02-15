import { Tenant } from "@/types/tenant"
import { useContext } from "react"
import { AppContext } from "."
import { Actions } from "./types"

export const useAppContext = () => {
  const { state, dispatch } = useContext(AppContext)
  
  return {
    ...state,
    setTenant: (tenant: Tenant) => {
      dispatch({
        type: Actions.SET_TENANT,
        payload: { tenant }
      });
    }
  }
}