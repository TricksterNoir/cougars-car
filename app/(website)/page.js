import Home from "@/app/(website)/home";
import { getAllPosts } from "@/lib/sanity/client";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function IndexPage({ posts }) {
  return <Home posts={posts} />;
}

export async function getStaticProps({ locale }) {
  const posts = await getAllPosts();
  return {
    props: {
      posts,
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}