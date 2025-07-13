import Head from "next/head";
import styles from "@/styles/pages/terms.module.css";
import MainLayout from "@/layout/MainLayout";
import Link from "next/link";

export default function Terms() {

  return (
    <>
      <Head>
        <title>SMP RAIZ - Termos de uso da loja</title>
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
          
          <h1>Termos de uso</h1>

          <div className={styles.container}>
            <p>
              Ao utilizar nossa loja, você concorda com os seguintes termos de uso:
            </p>
            <p>
              1. Uso da Loja: Você concorda em usar a loja apenas para fins legais e de acordo com todas as leis aplicáveis. É proibido o uso da loja para qualquer atividade fraudulenta ou ilegal.
            </p>
            <p>
              2. Conta de Usuário: Você é responsável por manter a confidencialidade das informações da sua conta, incluindo sua senha. Qualquer atividade realizada através da sua conta é de sua responsabilidade.
            </p>
            <p>
              3. Compras e Pagamentos: Todas as compras feitas na loja são finais. Não oferecemos reembolsos, exceto quando exigido por lei ou quando a entrega do produto não for viável. Reservamo-nos o direito de recusar ou cancelar qualquer pedido a nosso critério.
            </p>
            <p>
              4. Propriedade Intelectual: Todo o conteúdo da loja, incluindo textos, imagens, logotipos e software, é protegido por direitos autorais e outras leis de propriedade intelectual. Você não pode usar esse conteúdo sem nossa permissão expressa.
            </p>
            <p>
              5. Modificações nos Termos: Reservamo-nos o direito de modificar estes termos a qualquer momento. Quaisquer alterações serão publicadas nesta página e entrarão em vigor imediatamente após a publicação.
            </p>
            <p>
              6. Limitação de Responsabilidade: Não seremos responsáveis por quaisquer danos diretos, indiretos, incidentais ou consequenciais decorrentes do uso ou incapacidade de uso da loja.
            </p>
            <p>
              7. Lei Aplicável: Estes termos serão regidos e interpretados de acordo com as leis do Brasil.
            </p>
            <p>
              O uso contínuo ou realização de qualquer compra em nosso site será considerado como aceitação dos nossos termos de uso. Se você tiver alguma dúvida sobre estes termos, entre em contato conosco no <Link href={'/discord'}>Discord do SMP RAIZ</Link> antes de usar a loja.
            </p>
          </div>

        </main>

      </MainLayout>
    </>
  );
}
