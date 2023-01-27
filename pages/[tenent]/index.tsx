import { Banner } from "@/components/Banner";
import { ProductItem } from "@/components/ProductItem";
import { SearchInput } from "@/components/Searchinput";
import styles from "../../styles/Home.module.css";

const Home = () => {
  const handleSearch = (seachValue: String) => {
    console.log("Você está procurando: ${searchValue}");
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
              <div className={styles.Mline}></div>
              <div className={styles.Mline}></div>
              <div className={styles.Mline}></div>
            </div>
          </div>
        </div>
        <div className={styles.headerBottom}>
          <SearchInput mainColor="#FB9400" onsearch={handleSearch} />
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
          mainColor="FB9400"
          secColor="#CCC"
        />
        <ProductItem
          data={{
            id: 2,
            image: "/temp/bg.png",
            categoryName: "Tradicional",
            name: "X-burger",
            price: "R$ 25,50",
          }}
          mainColor="FB9400"
          secColor="#CCC"
        />
        <ProductItem
          data={{
            id: 3,
            image: "/temp/bg.png",
            categoryName: "Tradicional",
            name: "X-burger",
            price: "R$ 25,50",
          }}
          mainColor="FB9400"
          secColor="#CCC"
        />
        <ProductItem
          data={{
            id: 4,
            image: "/temp/bg.png",
            categoryName: "Tradicional",
            name: "X-burger",
            price: "R$ 25,50",
          }}
          mainColor="FB9400"
          secColor="#CCC"
        />
        <ProductItem
          data={{
            id: 5,
            image: "/temp/bg.png",
            categoryName: "Tradicional",
            name: "X-burger",
            price: "R$ 25,50",
          }}
          mainColor="FB9400"
          secColor="#CCC"
        />
      </div>
    </div>
  );
};

export default Home;
