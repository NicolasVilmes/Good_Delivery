import { Header } from "@/components/Header";
import { InputField } from "@/components/InputField";
import { useAppContext } from "@/contexts/AppContext";
import { useApi } from "@/libs/useApi";
import { Tenant } from "@/types/tenant";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import styles from "../../styles/Login.module.css";

const Login = (data: Props) => {
  const { tenant, setTenant } = useAppContext();

  useEffect(() => {
    setTenant(data.tenant);
  }, [data.tenant, setTenant]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className={styles.container}>
      <Head>
        <title>Login | {data.tenant.name}</title>
      </Head>

      <Header color={data.tenant.mainColor} backHref={`/${data.tenant.slug}`} />

      <InputField
        color={data.tenant.mainColor}
        placeholder="Digite seu e-mail"
        value={email}
        onchange={setEmail}
      />

      <InputField
        color={data.tenant.mainColor}
        placeholder="Digite sua senha"
        value={password}
        onchange={setPassword}
        password
      />
    </div>
  );
};

export default Login;

type Props = {
  tenant: Tenant;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { tenant: tenantSlug } = context.query;
  const api = useApi();

  //Get Tenant
  const tenant = await api.getTenant(tenantSlug as string);
  if (!tenant) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      tenant,
    },
  };
};
