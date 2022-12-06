import Head from "next/head";
import styles from "../styles/Home.module.scss";
import client from "../apollo/client";
import GET_MENUS from "../queries/get-menus";
import Layout from "../components/layouts";

export default function Home({ menus }) {
  console.log("DataHome: ", menus);
  return (
    <Layout data={menus}>
      <h1>Content</h1>
    </Layout>
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
