import { useFormatter } from "@/libs/useFormatter";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";

type Props = {
  color: string;
  count: number;
  UpdateCount: (newCount: number) => void;
  max?: number;
  min?: number;
};

export const Quantity = ({ color, count, UpdateCount, max, min }: Props) => {
  const formatter = useFormatter();

  const [remove, setRemove] = useState(false);
  const [add, setAdd] = useState(false);

  useEffect(() => {
    setRemove(!min || (min && count > min) ? true : false);
    setAdd(!max || (max && count < max) ? true : false);
  }, [count, min, max]);

  const handleRemove = () => {
    if (remove) UpdateCount(count - 1);
  };

  const handleAdd = () => {
    if (add) UpdateCount(count + 1);
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.button}
        onClick={handleRemove}
        style={{
          color: remove ? "#FFF" : "#96A3AB",
          backgroundColor: remove ? color : "#F2F4F5",
        }}
      >
        -
      </div>
      <div className={styles.qt}>{formatter.formatQt(count, 2)}</div>
      <div
        className={styles.button}
        onClick={handleAdd}
        style={{
          color: add ? "#FFF" : "#96A3AB",
          backgroundColor: add ? color : "#F2F4F5",
        }}
      >
        +
      </div>
    </div>
  );
};
