import { Banner } from "@/components/Banner";
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
    </div>
  );
};

export default Home;
