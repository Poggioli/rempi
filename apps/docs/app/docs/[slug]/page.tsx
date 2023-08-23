import { MDXWrapper } from "@/components/MDXWrapper";
import { Metadata } from "next";
import { serialize } from "next-mdx-remote/serialize";
import loadMdxFile from "utils/loadMdxFile";

export async function generateMetadata({ params }): Promise<Metadata> {
  const { slug } = params;
  const {
    frontmatter: { title },
  } = loadMdxFile("app/docs/[slug]", slug);

  return {
    title: title ? `${title} - Rempi-UI` : "Rempi-UI",
  };
}

async function SlugPage({ params }) {
  const { slug } = params;
  const source = loadMdxFile("app/docs/[slug]", slug);
  const content = await serialize(source.content);

  return <MDXWrapper source={content} />;
}

export default SlugPage;
