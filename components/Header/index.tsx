import styles from "./syteles.module.css";
import BackIcon from "./backIcon.svg";
import Link from "next/link";

type Props = {
  backHref: string;
  color: string;
  title?: string;
  subtitle?: string;
  reverse?: boolean;
};

export const Header = ({
  backHref,
  title,
  color,
  subtitle,
  reverse,
}: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <Link legacyBehavior href={backHref}>
          <a className={reverse ? styles.buttom : ""}>
            <BackIcon color={reverse ? "#FFF" : color} />
          </a>
        </Link>
      </div>
      <div className={styles.centerSide}>
        {title && (
          <div
            className={styles.title}
            style={{ color: reverse ? "#FFF" : "#1B1B1B" }}
          >
            {title}
          </div>
        )}
        {subtitle && <div className={styles.subtitle}>{subtitle}</div>}
      </div>
      <div className={styles.rightSide}></div>
    </div>
  );
};
