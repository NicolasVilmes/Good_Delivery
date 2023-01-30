import { Tenant } from "@/types/tenant";

export const useApi = () => {
  return {
    getTenant: (tenantSlug: string): boolean | Tenant => {
      switch (tenantSlug) {
        case 'Exburguer': 
          return {
            slug: 'Exburguer',
            name: 'Exburger',
            mainColor: '#FF0700',
            secColor: '#00FF00'
          };
        case 'Expizza':     
          return {
            slug: 'Expizza',
            name: 'pizza',
            mainColor: '#CC1389',
            secColor: '#00AF00'
          };
        default: return false;
      }
    }
  };
};
