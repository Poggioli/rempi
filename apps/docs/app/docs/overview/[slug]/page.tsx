import { MDXWrapper } from "@/components/MDXWrapper";
import { getCurrentLocale } from "i18n";
import { Metadata } from "next";
import { serialize } from "next-mdx-remote/serialize";
import { loadMdxFile } from "utils/loadMdxFile";

function loadDocBySlug(slug: string) {
  return loadMdxFile(`documentations/overview/${getCurrentLocale()}/`, slug);
}

export async function generateMetadata({ params }): Promise<Metadata> {
  const { slug } = params;

  const {
    frontmatter: { title },
  } = loadDocBySlug(slug);

  return {
    title: title ? `${title} - Rempi-UI` : "Rempi-UI",
  };
}

async function SlugPage({ params }) {
  const { slug } = params;

  const source = loadDocBySlug(slug);
  const content = await serialize(source.content);

  return <MDXWrapper source={content} />;
}

export default SlugPage;
