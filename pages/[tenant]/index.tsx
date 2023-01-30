import { Banner } from "@/components/Banner";
import { ProductItem } from "@/components/ProductItem";
import { SearchInput } from "@/components/Searchinput";
import { useAppContext } from "@/contexts/AppContext";
import { useApi } from "@/libs/useApi";
import { Tenant } from "@/types/tenant";
import { GetServerSideProps } from "next";
import { useEffect } from "react";
import styles from "../../styles/Home.module.css";

const Home = (data: Props) => {
  const { tenant, setTenant } = useAppContext();

  useEffect(() => {
    setTenant(data.tenant);
  }, [data.tenant, setTenant]);

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
        <ProductItem
          data={{
            id: 1,
            image: "/temp/bg.png",
            categoryName: "Tradicional",
            name: "X-burger",
            price: "R$ 25,50",
          }}
        />
      </div>
    </div>
  );
};

export default Home;

type Props = {
  tenant: Tenant;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { tenant: tenantSlug } = context.query;
  const api = useApi();

  //Get Tenant
  const tenant = await api.getTenant(tenantSlug as string);
  if (!tenant) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      tenant,
    },
  };
};
