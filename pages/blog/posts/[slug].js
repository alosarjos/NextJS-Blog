import Head from "next/head";

import Layout from "../../../components/Layout";
import BackButton from "../../../components/BackButton";

import { getAllPostSlugs, getPostData } from "../../../lib/posts";

export default function Post({ postData }) {
  return (
    <>
      <Head>
        <title>{postData.title}</title>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@alosarjos" />
        <meta name="twitter:title" content={postData.title} />
        <meta name="twitter:description" content={postData.content} />
        <meta name="twitter:image" content="https://blog.alosarjos.dev/avatar.jpg" />
      </Head>

      <Layout>
        <BackButton href="/blog" />

        <section className="mt-8 flex flex-col items-center justify-center">
          <div className="text-center ">
            <div className="prose prose-xl">
              <h1 className="">{postData.title}</h1>
            </div>
            <date className="prose prose-xl">{postData.date}</date>
          </div>
          <div
            className="mt-6 prose prose-xl post-content"
            dangerouslySetInnerHTML={{ __html: postData.content }}
          />
        </section>
      </Layout>
    </>
  );
}

export async function getStaticPaths() {
  const postSlugs = getAllPostSlugs().map((postSlug) => {
    return { params: { slug: postSlug } };
  });

  return {
    paths: postSlugs,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.slug);
  return {
    props: {
      postData,
    },
  };
}
