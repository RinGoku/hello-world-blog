import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { FunctionComponent } from "react";
import { PostMetadata } from "../../types/PostMetadata";
import Layout from "../../components/layout";
import Head from "next/head";
import PostHeader from "../../components/post-header";
import { getProseClass } from "../../helpers/theme";
import SeriesCard from "../../components/series-card";
import { client } from "../../libs/client";

const Post: FunctionComponent<PostProps> = (props) => {
  const { post } = props;

  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <Layout>
        <article className="max-w-3xl md:mt-6 rounded-xl mx-auto bg-white dark:bg-cool-gray-800">
          <img
            src={post.coveredImage?.url}
            className="object-cover w-full h-auto"
          />
          <div className="p-8">
            <PostHeader post={post}></PostHeader>
            {/* {post.series && (
              <SeriesCard post={post} related={related}></SeriesCard>
            )} */}
            <div
              className={`prose ${getProseClass(
                post.theme
              )} max-w-3xl mx-auto dark:text-cool-gray-100`}
              dangerouslySetInnerHTML={{ __html: post.body }}
            />
          </div>
        </article>
      </Layout>
    </>
  );
};

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blog" });

  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blog", contentId: id });

  return {
    props: {
      post: data,
    },
  };
};

interface Params extends ParsedUrlQuery {
  id: string;
}

type PostProps = {
  post: PostMetadata;
  // related: PostMetadata[];
};
export default Post;
