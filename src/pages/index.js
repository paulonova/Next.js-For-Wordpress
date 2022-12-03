import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import client from "../apollo/client";
import GET_POSTS from "../queries/get-menus";
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
  const data = await client
    .query({
      query: gql`
        query NewQuery {
          posts {
            edges {
              node {
                uri
                title
                date
              }
            }
          }
        }
      `,
    })
    .then((res) => console.log("RESULT: ", res));

  return {
    props: {}, // will be passed to the page component as props
  };
}
