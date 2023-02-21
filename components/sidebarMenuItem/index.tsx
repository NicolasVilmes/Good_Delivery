import style from "./styles.module.css";
import CartIcon from "./cart.svg";
import ConfigIcon from "./config.svg";
import ExitIcon from "./exit.svg";
import FavIcon from "./fav.svg";
import MenuIcon from "./menu.svg";
import OrderIcon from "./order.svg";

type Props = {
  color: string;
  label: string;
  icon: "cart" | "config" | "exit" | "fav" | "menu" | "order";
  onClick: () => void;
};

export const MenuIten = ({ color, label, icon, onClick }: Props) => {
  return (
    <div className={style.container} onClick={onClick}>
      {icon === "cart" && <CartIcon color={color} />}
      {icon === "config" && <ConfigIcon color={color} />}
      {icon === "exit" && <ExitIcon color={color} />}
      {icon === "fav" && <FavIcon color={color} />}
      {icon === "menu" && <MenuIcon color={color} />}
      {icon === "order" && <OrderIcon color={color} />}
      <span>{label}</span>
    </div>
  );
};
