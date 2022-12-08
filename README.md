# Headless Next js with Wordpress

## Installations

<h4>Apollo Client and GraphQl Installation</h4>
Link: https://www.apollographql.com/docs/react/

> npm i @apollo/client graphql

Instuctions:

1 - Install the apollo and graphql dependencies

2 - Save in .env.local the constants of Wordpress url and the Nextjs Url, using as a prefix NEXT*PUBLIC* to Next identify the constant

3- Create a folder in src named apollo ena a file named client.js

4 - Copy and adapt the code into the project

5 - In \_app.js det the <ApolloProvider client={client}></ApolloProvider> as a main component.

## GraphQl Fragments

<p>When we need to use/repeat the same fields in multiple queries, making changes can be tedious as we would have to update at all places.😬 This is where fragments come in handy </p>

Link: https://codeytek.com/are-you-using-fragments-in-graphql/

## Next Js data fetching

Link: https://nextjs.org/docs/basic-features/data-fetching/overview

### Using getStaticProps to fetch data from a CMS

Link: https://nextjs.org/docs/basic-features/data-fetching/get-static-props

# Create a LAYOUT Component

- getStaticProps (Static Site Generation) is only accepted from a page (NOT from a Component), Next.js will pre-render this page at build time using the props returned by getStaticProps.

- So I create a Layout Component that will inherit data (Menus from Wordpress) as a props.

> Home Page: Will getStaticProps and save as a props and transfer to Layout Component

> Layout Component: Will get data and send via props to Header

> Header Component: Will receive the data and send via props to Nav Component

> Nav Component will display the result of Wordpress Menu.

# Incremental Static Regeneration - REVALIDATE

- Regenerate new version of page in the background, ONLY on the first request during that interval.

* Timeout is calculated with ref to the time in seconds from previous request.

> revalidate: 1 => Means that every 1 second after the first request the user will get a new update from server

# Set Multiple SASS MODULE CLASS

> [styles.classname, styles.otherclassname].join(" ")

> [styles["class-name"], styles.classname].join(" ")
