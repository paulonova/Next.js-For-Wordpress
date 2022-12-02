/**
 * Example about how to fetch data from graphQl
 */

const API_URL = "https://nextjswordpress:8890/graphql";

async function fetchAPI(query, { variables } = {}) {
  const headers = { "Content-Type": "application/json" };

  const res = await fetch(API_URL, {
    method: "GET",
    headers,
    body: JSON.stringify({
      query,
      variables,
    }),
  });
  const json = await res.json();
  return json.data;
}

export async function getAllPostsSlugs() {
  const data = await fetchAPI(`
  posts(first: 1000) {
    edges {
      node {
        title
      }
    }
  }
  `);

  return data.posts;
}

export async function getPostsForHome() {
  const data = await fetchAPI(`
  posts(first: 3) {
    edges {
      node {
        title
        slug
        date
      }
    }
  }
  `);

  return data.posts;
}
