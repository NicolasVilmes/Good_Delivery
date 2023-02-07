import { useAppContext } from "@/contexts/AppContext";
import { Product } from "@/types/product";
import Image from "next/image";
import styles from "./styles.module.css";

type Props = {
  data: Product;
};

export const ProductItem = ({ data }: Props) => {
  const { tenant } = useAppContext();

  return (
    <a
      href={`/${tenant?.slug}/product/${data.id}`}
      className={styles.container}
    >
      <div
        className={styles.head}
        style={{ backgroundColor: tenant?.secColor }}
      ></div>
      <div className={styles.info}>
        <Image
          className={styles.img}
          src={data.image}
          alt=""
          width={100}
          height={100}
          layout="responsive"
          objectFit="contain"
        />
        <div className={styles.catname}>{data.categoryName}</div>
        <div className={styles.prodname}>{data.name}</div>
        <div className={styles.price} style={{ color: tenant?.mainColor }}>
          R${data.price.toFixed(2)}
        </div>
      </div>
    </a>
  );
};
