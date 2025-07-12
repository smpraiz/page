import Head from "next/head";
import styles from "@/styles/pages/index.module.css";
import { useEffect, useState } from "react";
import MainLayout from "@/layout/MainLayout";

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
        <title>SMP RAIZ</title>
        <meta name="description" content="Site do SMP RAIZ" />
        <meta content="#43B581" name="theme-color" />
        <link rel="icon" href="/favicon.png" />
        
        <meta property="og:title" content="SMP Raiz - O Verdadeiro Minecraft Roleplay" />
        <meta property="og:description" content="Participe do SMP mais raiz do Brasil, com mapa realista, roleplay de nações e muita história!" />
        <meta property="og:url" content="https://smpraiz.com.br" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/favicon.png" />
        <meta property="og:image:width" content="630" />
        <meta property="og:image:height" content="630" />

        <meta property="og:image:alt" content="Banner do SMP Raiz" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SMP Raiz - O Verdadeiro Minecraft Roleplay" />
        <meta name="twitter:description" content="Participe do SMP mais raiz do Brasil, com mapa realista, roleplay de nações e muita história!" />
        <meta name="twitter:image" content="/favicon.png" />

      </Head>

      <MainLayout>
        
        <header className={styles.header}>
          <h1>Loja do SMP Raiz</h1>
        </header>

        <main className={styles.main}>
          {
            !loading && !status?.error && status?.online ? 'Servidor online': 'Servidor offline' 
          }
          <button>Não clique em mim!</button>
        </main>

      </MainLayout>
    </>
  );
}
