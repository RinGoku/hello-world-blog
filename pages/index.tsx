import { GetStaticProps } from "next";
import Head from "next/head";
import { FunctionComponent } from "react";
import Hero from "../components/hero";
import PostList from "../components/post-list";
import { PostMetadata } from "../types/PostMetadata";
import Layout from "../components/layout";
import { client } from "../libs/client";

const posts: PostMetadata[] = [];

const Home: FunctionComponent<HomeProps> = (props) => {
  const { posts } = props;

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <Head>
          <title>Welcome to my blog!</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <Hero></Hero>
          <div className="mt-4">
            <PostList items={posts}></PostList>
          </div>
        </main>
      </div>
    </Layout>
  );
};

type HomeProps = {
  posts: PostMetadata[];
};

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });

  return {
    props: {
      posts: data.contents,
    },
  };
};

export default Home;