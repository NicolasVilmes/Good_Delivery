export type getTenantResponse = {
  name: string;
  mainColor: string;
  secColor: string;
};

export const useApi = () => {
  return {
    getTenant: (tenantSlug: string): boolean | getTenantResponse => {
      switch (tenantSlug) {
        case 'Exburguer': 
          return {
            name: 'Exburger',
            mainColor: '#FF0700',
            secColor: '#00FF00'
          };
        case 'Expizza':     
          return {
            name: 'pizza',
            mainColor: '#CC1389',
            secColor: '#00AF00'
          };
        default: return false;
      }
    }
  };
};