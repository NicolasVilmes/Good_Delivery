import styles from "./syteles.module.css";
import BackIcon from "./backIcon.svg";
import Link from "next/link";

type Props = {
  backHref: string;
  color: string;
  title?: string;
  subtitle?: string;
};

export const Header = ({ backHref, title, color, subtitle }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <Link href={backHref}>
          <BackIcon color={color} />
        </Link>
      </div>
      <div className={styles.centerSide}>
        {title && <div className={styles.title}>{title}</div>}
        {subtitle && <div className={styles.subtitle}>{subtitle}</div>}
      </div>
      <div className={styles.rightSide}></div>
    </div>
  );
};
