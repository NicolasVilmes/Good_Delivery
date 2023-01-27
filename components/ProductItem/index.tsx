import { Product } from "@/types/product";
import Image from "next/image";
import styles from "./styles.module.css";

type Props = {
  data: Product;
  mainColor: string;
  secColor: string;
};

export const ProductItem = ({ data, mainColor, secColor }: Props) => {
  return (
    <a href={`/exburger/product/${data.id}`} className={styles.container}>
      <div className={styles.head} style={{ backgroundColor: secColor }}></div>
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
        <div className={styles.price} style={{ color: mainColor }}>
          {data.price}
        </div>
      </div>
    </a>
  );
};
