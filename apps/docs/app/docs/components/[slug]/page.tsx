import { MDXWrapper } from "@/components/MDXWrapper";
import { Metadata } from "next";
import { serialize } from "next-mdx-remote/serialize";
import { loadMdxFile, readAllFilesInPath } from "utils/loadMdxFile";
import semverSort from "semver-sort";

function loadDocBySlug(slug: string, version?: string) {
  const docs: string[] = readAllFilesInPath(`documentations/components/${slug}`);
  const docsWithoutExt = docs.map((doc) => doc.replace(".mdx", ""));

  if (version && docsWithoutExt.includes(version)) {
    return loadMdxFile(`documentations/components/${slug}`, version);
  }

  const docsSortedMoreRecentFirst = semverSort.desc(docsWithoutExt);

  return loadMdxFile(
    `documentations/components/${slug}`,
    docsSortedMoreRecentFirst[0]
  );
}

export async function generateMetadata({ params, searchParams }): Promise<Metadata> {
  const { slug } = params;
  const { v } = searchParams;

  const {
    frontmatter: { title },
  } = loadDocBySlug(slug, v);

  return {
    title: title ? `${title} - Rempi-UI` : "Rempi-UI",
  };
}

async function SlugPage({ params, searchParams }) {
  const { slug } = params;
  const { v } = searchParams;

  const source = loadDocBySlug(slug, v);
  const content = await serialize(source.content);

  return <MDXWrapper source={content} />;
}

export default SlugPage;
