import { useState } from "react";
import styles from "./styles.module.css";

type Props = {
  mainColor: string;
  onsearch: (searchValue: string) => void;
};

export const SearchInput = ({ mainColor, onsearch }: Props) => {
  const [fucused, setfocused] = useState(false);
  const [searchValue, setsearcValue] = useState("");

  const InputFocus = () => {
    setfocused(true);
  };

  const InputBlur = () => {
    setfocused(false);
  };

  const KeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === "Enter") {
      onsearch(searchValue);
    }
  };

  return (
    <div
      className={styles.container}
      style={{ borderColor: fucused ? mainColor : "#FFF" }}
    >
      <div
        className={styles.button}
        onClick={() => onsearch(searchValue)}
      ></div>
      <input
        type="text"
        className={styles.input}
        placeholder="O que deseja?"
        onFocus={InputFocus}
        onBlur={InputBlur}
        onKeyUp={KeyUp}
        value={searchValue}
        onChange={(e) => setsearcValue(e.target.value)}
      />
    </div>
  );
};
