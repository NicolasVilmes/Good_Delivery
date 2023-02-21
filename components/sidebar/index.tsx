import { useAuthContext } from "@/contexts/auth";
import { Tenant } from "@/types/tenant";
import { useRouter } from "next/router";
import { Button } from "../Button";
import { MenuIten } from "../sidebarMenuItem/";
import style from "./styles.module.css";

type Props = {
  tenant: Tenant;
  open: boolean;
  onClose: () => void;
};

export const Sidebar = ({ tenant, open, onClose }: Props) => {
  const { user, setToken } = useAuthContext();

  const router = useRouter();

  return (
    <div
      className={style.container}
      style={{
        width: open ? "100vw" : "0",
      }}
    >
      <div className={style.area}>
        <div className={style.header}>
          <div
            className={style.loginArea}
            style={{ borderBottomColor: tenant.mainColor }}
          >
            {user && (
              <div className={style.userInfo}>
                <strong>{user.name}</strong>
                Último pedido há X semanas
              </div>
            )}
            {!user && (
              <Button
                color={tenant.mainColor}
                label="fazer login"
                onClick={() => router.push(`/${tenant.slug}/login`)}
                fill
              />
            )}
          </div>
          <div
            className={style.closeBtn}
            style={{ color: tenant.mainColor }}
            onClick={onClose}
          >
            X
          </div>
        </div>
        <div className={style.line}></div>
        <div className={style.menu}>
          <MenuIten
            color={"#6A7D88"}
            icon="menu"
            label="Cardápio"
            onClick={onClose}
          />
          <MenuIten
            color={"#6A7D88"}
            icon="cart"
            label="Sacola"
            onClick={() => router.push(`/${tenant.slug}/cart`)}
          />
          <MenuIten
            color={"#6A7D88"}
            icon="fav"
            label="Favoritos"
            onClick={() => router.push(`/${tenant.slug}/user/fav`)}
          />
          <MenuIten
            color={"#6A7D88"}
            icon="order"
            label="Meus Pedidos"
            onClick={() => router.push(`/${tenant.slug}/orders`)}
          />
          <MenuIten
            color={"#6A7D88"}
            icon="config"
            label="Configurações"
            onClick={() => router.push(`/${tenant.slug}/user/settings`)}
          />
        </div>
        <div className={style.exitArea}>
          {user && (
            <MenuIten
              color={"#6A7D88"}
              icon="exit"
              label="Sair"
              onClick={() => {
                setToken("");
                onClose();
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};
