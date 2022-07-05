import Head from "next/head";

import PostPreview from "../../components/PostPreview";
import BackButton from "../../components/BackButton";
import Layout from "../../components/Layout";
import CardGrid from "../../components/CardGrid";

import { getSortedPostsData } from "../../lib/posts";

export default function Blog({ allPostsData }) {
  const cards = allPostsData.map((postData) => ({
    href: `/blog/posts/${postData.slug}`,
    content: (
      <PostPreview key={postData.slug} postData={postData}></PostPreview>
    ),
  }));

  return (
    <>
      <Head>
        <title>Alosarjos Blog</title>
      </Head>

      <Layout>
        <BackButton href="/" />
        <CardGrid cards={cards}></CardGrid>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allPostsData = await getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
