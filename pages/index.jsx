import styles from "@/styles/pages/index.module.css";
import MainLayout from "@/layout/MainLayout";
import CustomHead from "@/components/CustomHead";
import { useState, useEffect } from "react";
import Link from "next/link";
import { DISCORD_LINK } from "./discord";

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

        <main className={styles.main}>
          
          <h1>
            Bem-vindo(a) ao SMP Raiz!
          </h1>

          <section className={styles.container}>
            <p>
              O SMP Raiz é um servidor de Minecraft focado na experiência raiz do jogo, com
              liberdade pra tudo (menos hack) e uma comunidade amigável. Aqui, você pode
              explorar, construir e se divertir com outros jogadores em um ambiente livre,
              justo e equilibrado.
            </p>
          </section>

          <section className={styles.container}>
            <h1>
              Se junte a nós!
            </h1>
            <p>
              Para entrar no servidor, adicione o seguinte endereço no seu Minecraft:
            </p>
            <input type="text" name="ip" id="Ip" readOnly value={'jogar.smpraiz.com.br'} onClick={(e) => e.target.select()} />
            <input type="text" name="port" id="Port" readOnly value={'10295'} onClick={(e) => e.target.select()} />
            <p>
              Você pode jogar no Minecraft Bedrock (qualquer versão) e Minecraft Java Edition (qualquer versão acima da 1.9), seja pirata ou original. A melhor experiência é sempre na versão mais recente!
            </p>
            <p>
              Também temos um Discord ativo onde você pode tirar dúvidas, participar de eventos e interagir com a comunidade.
            </p>
            <button onClick={() => window.open(DISCORD_LINK, '_blank', 'noopener,noreferrer')}>
              Entrar no Discord
            </button>
          </section>

          <section className={styles.container}>
            {
              loading===true && !status?.error && status?.online===false && <h1>Servidor Offline</h1>
            }

            {
              status?.online && <>
                <h1>Servidor Online</h1> 
                <p>Jogadores online: {status?.players?.online} / {status?.players?.max}</p>
              </>
            }
          </section>

        </main>

      </MainLayout>
    </>
  );
}
