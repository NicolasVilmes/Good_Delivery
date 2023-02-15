import { Banner } from "@/components/Banner";
import { ProductItem } from "@/components/ProductItem";
import { SearchInput } from "@/components/Searchinput";
import { useAppContext } from "@/contexts/app";
import { useApi } from "@/libs/useApi";
import { Product } from "@/types/product";
import { Tenant } from "@/types/tenant";
import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";
import styles from "../../styles/Home.module.css";

const Home = (data: Props) => {
  const { tenant, setTenant } = useAppContext();

  useEffect(() => {
    setTenant(data.tenant);
  }, [data.tenant, setTenant]);

  const [products, setProducts] = useState<Product[]>(data.products);

  const handleSearch = (seachValue: String) => {
    console.log(`Você está procurando: ${seachValue}`);
  };

  return (
    <div className={styles.conteiner}>
      <header className={styles.header}>
        <div className={styles.headerTop}>
          <div className={styles.TLeft}>
            <div className={styles.Htitle}> Seja Bem-Vindo (a) 👋</div>
            <div className={styles.Hsub}> O que deseja para hoje?</div>
          </div>
          <div className={styles.TRight}>
            <div className={styles.menuButtom}>
              <div
                className={styles.Mline}
                style={{ backgroundColor: tenant?.mainColor }}
              ></div>
              <div
                className={styles.Mline}
                style={{ backgroundColor: tenant?.mainColor }}
              ></div>
              <div
                className={styles.Mline}
                style={{ backgroundColor: tenant?.mainColor }}
              ></div>
            </div>
          </div>
        </div>
        <div className={styles.headerBottom}>
          <SearchInput onsearch={handleSearch} />
        </div>
      </header>
      <Banner />
      <div className={styles.grid}>
        {products.map((item, index) => (
          <ProductItem key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Home;

type Props = {
  tenant: Tenant;
  products: Product[];
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { tenant: tenantSlug } = context.query;
  const api = useApi(tenantSlug as string);

  //Get Tenant
  const tenant = await api.getTenant();
  if (!tenant) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  //Get products
  const products = await api.getAllProducts();

  return {
    props: {
      tenant,
      products,
    },
  };
};
