import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/pages/terms.module.css";
import MainLayout from "@/layout/MainLayout";

export default function Privacy() {

  return (
    <>
      <Head>
        <title>SMP RAIZ - Política de privacidade da loja</title>
        <meta name="description" content="Site do SMP RAIZ" />
        <meta content="#373737" name="theme-color" />
        <link rel="icon" href="/favicon.png" />
        
        <meta property="og:title" content="SMP Raiz - Minecraft de verdade!" />
        <meta property="og:description" content="Participe do SMP mais raiz do Brasil, com semi-anarquia, liberdade e sobrevivência de verdade!" />
        <meta property="og:url" content="https://smpraiz.com.br" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/favicon.png" />
        <meta property="og:image:width" content="630" />
        <meta property="og:image:height" content="630" />

        <meta property="og:image:alt" content="Ícone do SMP Raiz" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SMP Raiz - Minecraft de verdade!" />
        <meta name="twitter:description" content="Participe do SMP mais raiz do Brasil, com semi-anarquia, liberdade e sobrevivência de verdade!" />
        <meta name="twitter:image" content="/favicon.png" />

      </Head>

      <MainLayout>

        <img src="/images/wallpaper.png" className={styles.background} />

        <main className={styles.main}>
          
          <h1>Política de Privacidade</h1>

          <div className={styles.container}>
            <p>
              Sua privacidade é muito importante para nós. É política do SMP RAÍZ respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar em nossa loja e outros sites que operamos.
            </p>
            <p>
              Coletamos informações pessoais somente quando necessário, sempre com seu consentimento e total transparência. Explicamos claramente o motivo da coleta e como esses dados serão utilizados.
            </p>
            <p>
              As informações coletadas são armazenadas apenas pelo tempo necessário para fornecer os serviços solicitados. Adotamos medidas de segurança comerciais aceitáveis para proteger seus dados contra perda, roubo, acesso não autorizado, divulgação, cópia ou modificação indevida.
            </p>
            <p>
              Jamais compartilhamos suas informações pessoais publicamente ou com terceiros, exceto quando legalmente exigido ou quando necessário para funcionamento dos serviços (ex.: integração com Mercado Pago).
            </p>
            <p>
              Nosso site pode conter links para sites externos que não são de nossa responsabilidade. Recomendamos que você leia as respectivas políticas de privacidade desses sites ao acessá-los.
            </p>
            <p>
              O uso contínuo ou realização de qualquer compra em nosso site será considerado como aceitação das nossas práticas de privacidade. Se tiver dúvidas sobre como tratamos dados pessoais, entre em contato conosco no <Link href={'/discord'}>Discord do SMP RAIZ</Link> antes de usar a loja.
            </p>
          </div>

        </main>

      </MainLayout>
    </>
  );
}
