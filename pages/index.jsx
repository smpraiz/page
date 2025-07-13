import styles from "@/styles/pages/index.module.css";
import MainLayout from "@/layout/MainLayout";
import CustomHead from "@/components/CustomHead";
import { useState, useEffect } from "react";

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
      <CustomHead />

      <MainLayout>

        <img src="/images/wallpaper.png" className={styles.background} />

        <main className={styles.main}>

        </main>

      </MainLayout>
    </>
  );
}
