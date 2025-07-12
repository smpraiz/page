import Head from "next/head";
import styles from "@/styles/pages/index.module.css";
import { useEffect, useState } from "react";
import inspect from "inspect";

export default function Home() {

  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStatus() {
      try {
        const res = await fetch('https://api.mcstatus.io/v2/status/java/jogar.smpraiz.com.br:10295');
        const data = await res.json();
        setStatus(data);
      } catch (error) {
        console.error('Erro ao buscar status:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchStatus();
  }, []);

  return (
    <>
      <Head>
        <title>SMP RAÍZ</title>
        <meta name="description" content="Site do SMP RAIZ" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <body>
        <h1>Loja do SMP</h1>
        {
          !loading && !status?.error && status?.online ? 'Servidor online': 'Servidor offline' 
        }
      </body>
    </>
  );
}
