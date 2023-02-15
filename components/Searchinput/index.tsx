import { useState } from "react";
import styles from "./styles.module.css";
import SearchIcon from "./searchIcon.svg";
import { useAppContext } from "@/contexts/app";

type Props = {
  onsearch: (searchValue: string) => void;
};

export const SearchInput = ({ onsearch }: Props) => {
  const { tenant } = useAppContext();

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
      style={{ borderColor: fucused ? tenant?.mainColor : "#FFF" }}
    >
      <div className={styles.button} onClick={() => onsearch(searchValue)}>
        <SearchIcon color={tenant?.mainColor} />
      </div>
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
