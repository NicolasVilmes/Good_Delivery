import styles from "./styles.module.css";
import Hide from "./hide.svg";
import Show from "./show.svg";
import { useState } from "react";

type Props = {
  color: string;
  placeholder: string;
  value: string;
  onchange: (newValue: string) => void;
  password?: boolean;
};

export const InputField = ({
  color,
  placeholder,
  value,
  onchange,
  password,
}: Props) => {
  const [showPassword, setShowPassword] = useState(false);

  const [focused, setFocused] = useState(false);

  const toggleShowPassword = () => setShowPassword(!showPassword);

  return (
    <div
      className={styles.container}
      style={{
        borderColor: focused ? color : "#F9F9FB",
        backgroundColor: focused ? "#FFF" : "#F9F9FB",
      }}
    >
      <input
        type={password ? (showPassword ? "text" : "password") : "text"}
        className={styles.input}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onchange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
      {password && (
        <div className={styles.showPassword} onClick={toggleShowPassword}>
          {showPassword && <Show color="#BBB" />}
          {!showPassword && <Hide color="#BBB" />}
        </div>
      )}
    </div>
  );
};
