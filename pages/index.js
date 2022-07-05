import Head from "next/head";

import CardGrid from "../components/CardGrid";
import Layout from "../components/Layout";

const cards = [
  {
    href: "blog/",
    content: (
      <>
        <h2>Blog &rarr;</h2>
        <p>My latest posts regarding the developer projects.</p>
      </>
    ),
  },
  {
    href: "https://twitter.com/alosarjos",
    content: (
      <>
        <h2>Twitter &rarr;</h2>
        <p>I just retweet cool stuff about Linux, development and gaming.</p>
      </>
    ),
  },
  {
    href: "https://gitlab.com/alosarjos",
    content: (
      <>
        <h2>GitLab &rarr;</h2>
        <p>Check what&apos;s being cooked behind the curtain on GitLab!</p>
      </>
    ),
  },
  {
    href: "https://github.com/alosarjos",
    content: (
      <>
        <h2>GitHub &rarr;</h2>
        <p>A mirror for GitLab projects for more handy jolly cooperation!</p>
      </>
    ),
  },
];

export default function Home() {
  return (
    <div>
      <Head>
        <title>Alosarjos Site</title>
        <meta name="description" content="Alosarjos personal site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <h2 className="mt-2 text-4xl text-blue-500">Welcome to my site!</h2>
        <CardGrid cards={cards}></CardGrid>
      </Layout>
    </div>
  );
}
