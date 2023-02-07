import { Product } from "@/types/product";
import { Tenant } from "@/types/tenant";

const TEMPOP: Product = {
  id: 1,
  image: '/temp/bg.png',
  categoryName: 'Tradicional',
  name: 'X-burguer',
  price: 25.50,
  description: '2 Belnds de carne de 150g, Queijo Cheddar, Bacon, cebola caramelizada, Salada, Molho da casa, Pão brioche artesanal'
}

export const useApi = (tenantSlug: string) => ({
    getTenant: async () => {
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
    },

    getAllProducts: async () => {
      let products = [];
      for (let q = 0; q < 10; q++)
        products.push(TEMPOP)
        return products;
    },

  getProduct: async (id: string) => {
    return TEMPOP;
    }
});
