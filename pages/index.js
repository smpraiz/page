import Head from "next/head";
import styles from "@/styles/pages/index.module.css";

export default function Home() {
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
        {'Site em desenvolvimento...'}
      </body>
    </>
  );
}
