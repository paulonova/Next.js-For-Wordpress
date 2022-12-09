import Head from "next/head";
import styles from "../styles/_Home.module.scss";
import client from "../apollo/client";
import GET_MENUS from "../queries/get-menus";
import Layout from "../components/layouts";
import { isEmpty } from "lodash";

export default function Home({ menus, header, footer }) {
  console.log("DataHome: ", menus);
  console.log("DataHeader: ", header);
  console.log("DataFooter: ", footer);
  return (
    <Layout footer={footer} header={header} menus={menus}>
      <h1>Content</h1>
    </Layout>
  );
}

export async function getStaticProps() {
  console.log("REQUESTING...");
  const data = await client.query({
    query: GET_MENUS,
  });

  const menus = data.data.headerMenus.edges.map((menu) => {
    return menu;
  });

  return {
    props: {
      header: data.data.header || [],
      menus: {
        headerMenus: data.data.headerMenus.edges || [],
        footerMenus: data.data.footerMenus.edges || [],
      },
      footer: data.data.footer || [],
    },
    revalidate: 2, //In seconds
  };
}
