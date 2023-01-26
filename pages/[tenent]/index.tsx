import styles from "../../styles/Home.module.css";

const Home = () => {
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
        <div className={styles.headerBottom}></div>
      </header>
    </div>
  );
};

export default Home;
