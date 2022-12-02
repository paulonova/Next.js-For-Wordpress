import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import client from "../apollo/client";
//import GET_POSTS from "../queries/get-menus";
import { gql } from "@apollo/client";

export default function Home() {
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
  const { data, loading, networkStatus } = await client.query({
    query: gql`
            posts {
              edges {
                node {
                  title
                  slug
                  date
                }
              }
            }
          `,
  });

  console.log("DATA: ", data);
  return {
    props: {}, // will be passed to the page component as props
  };
}
