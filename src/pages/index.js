import Head from "next/head";
import styles from "../styles/Home.module.scss";
import client from "../apollo/client";
import GET_MENUS from "../queries/get-menus";

export default function Home({ menus }) {
  console.log("Props: ", menus);
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

export async function getStaticProps(context) {
  const data = await client.query({
    query: GET_MENUS,
  });

  const menus = data.data.headerMenus.edges.map((menu) => {
    return menu;
  });

  return {
    props: {
      menus: {
        HeaderMenus: data.data.headerMenus.edges,
        FooterMenus: data.data.footerMenus.edges,
      },
    },
  };
}
