import { useAppContext } from "@/contexts/app";
import { useApi } from "@/libs/useApi";
import { Product } from "@/types/product";
import { Tenant } from "@/types/tenant";
import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";
import styles from "@/styles/Product-id.module.css";
import Head from "next/head";
import { Header } from "@/components/Header";
import Image from "next/image";
import { Button } from "@/components/Button";
import { useFormatter } from "@/libs/useFormatter";
import { Quantity } from "@/components/Quantity";

const Product = (data: Props) => {
  const { tenant, setTenant } = useAppContext();

  useEffect(() => {
    setTenant(data.tenant);
  }, [data.tenant, setTenant]);

  const [qtCount, setQtCount] = useState(1);

  const handleUpdateCount = (newCount: number) => {
    setQtCount(newCount);
  };

  const formatter = useFormatter();

  const handleAddtoCart = () => {};

  return (
    <div className={styles.conteiner}>
      <Head>
        <title>
          {data.product.name} | {data.tenant.name}
        </title>
      </Head>
      <div className={styles.headerArea}>
        <Header
          color={data.tenant.mainColor}
          backHref={`/${data.tenant.slug}`}
          title="Produto"
          reverse
        />
      </div>

      <div
        className={styles.Hbg}
        style={{ backgroundColor: data.tenant.mainColor }}
      ></div>
      <div className={styles.productImg}>
        <Image src={data.product.image} alt="" width={309.16} height={350} />
      </div>
      <div className={styles.category}>{data.product.categoryName}</div>
      <div
        className={styles.title}
        style={{ borderBottomColor: data.tenant.mainColor }}
      >
        {data.product.name}
      </div>
      <div className={styles.line}></div>
      <div className={styles.description}>{data.product.description}</div>
      <div className={styles.qtText}>Quantidade</div>
      <div className={styles.area}>
        <div className={styles.areaLeft}>
          <Quantity
            color={data.tenant.mainColor}
            count={qtCount}
            UpdateCount={handleUpdateCount}
            min={1}
            max={10}
          />
        </div>
        <div
          className={styles.areaRight}
          style={{ color: data.tenant.mainColor }}
        >
          {formatter.formatPrice(data.product.price)}
        </div>
      </div>
      <div className={styles.button}>
        <Button
          color={data.tenant.mainColor}
          label="Adicionar ?? sacola"
          onClick={handleAddtoCart}
          fill
        />
      </div>
    </div>
  );
};

export default Product;

type Props = {
  tenant: Tenant;
  product: Product;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { tenant: tenantSlug, id } = context.query;
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

  //Get product
  const product = await api.getProduct(id as string);

  return {
    props: {
      tenant,
      product,
    },
  };
};
