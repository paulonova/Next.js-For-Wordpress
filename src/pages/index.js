import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

export default function Home() {
  const data = fetch(process.env.WORDPRESS_LOCAL_API_URL, {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify({ test: "value" }),
  });

  console.log("Data: ", data);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title> .
        <link rel='icon' href='/favicon' />
      </Head>

      <main>
        <h1 className='text-3xl font-bold underline'>
          Headless Wordpress Next.js
        </h1>
      </main>
    </div>
  );
}
