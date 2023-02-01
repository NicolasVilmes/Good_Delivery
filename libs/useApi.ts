import { Tenant } from "@/types/tenant";

export const useApi = () => {
  return {
    getTenant: (tenantSlug: string): boolean | Tenant => {
      switch (tenantSlug) {
        case 'Exburguer': 
          return {  
            slug: 'Exburguer',
            name: 'Exburguer',
            mainColor: '#FF0700',
            secColor: '#00FF00'
          };
        case 'Expizza':     
          return {
            slug: 'Expizza',
            name: 'pizza',
            mainColor: '#CC1389',
            secColor: '#bd3c32'
          };
        default: return false;
      }
    }
  };
};
