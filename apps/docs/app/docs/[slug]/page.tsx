import { MDXWrapper } from "@/components/MDXWrapper";
import { serialize } from "next-mdx-remote/serialize";
import loadMdxFile from "utils/loadMdxFile";

async function SlugPage({ params }) {
  const { slug } = params;
  const source = loadMdxFile("app/docs/[slug]", slug);
  const content = await serialize(source.content);

  return <MDXWrapper source={content} />;
}

export default SlugPage;
