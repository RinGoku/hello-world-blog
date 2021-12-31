import { GetStaticProps } from "next";
import Head from "next/head";
import { FunctionComponent } from "react";
import PostList from "../components/post-list";
import { PostMetadata } from "../types/PostMetadata";
import { client } from "../libs/client";
import Hero from "../components/hero";
import Layout from "../components/layout";

const posts: PostMetadata[] = [];

const Home: FunctionComponent<HomeProps> = (props) => {
  const { posts } = props;

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <Head>
          <title>Hello, World! devブログ</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <Hero />
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
