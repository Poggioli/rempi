import { MDXWrapper } from "@/components/MDXWrapper";
import { Metadata } from "next";
import { serialize } from "next-mdx-remote/serialize";
import { loadMdxFile, readAllFilesInPath } from "utils/loadMdxFile";
import semverSort from "semver-sort";
import { VersionProvider } from "@/components/VersionProvider/VersionProvider";
import { Callout } from "@rempi-ui/callout";
import { Megaphone } from "lucide-react";
import { NewVersionWarning } from "@/components/NewVersionWarning";

function loadAvailableVersions(slug: string) {
  const docs: string[] = readAllFilesInPath(
    `documentations/components/${slug}`
  );
  const docsWithoutExt = docs.map((doc) => doc.replace(".mdx", ""));
  const docsSortedMoreRecentFirst = semverSort.desc(docsWithoutExt);

  return docsSortedMoreRecentFirst;
}

function loadDocBySlug(slug: string, version?: string) {
  const versions = loadAvailableVersions(slug);

  if (version && versions.includes(version)) {
    return loadMdxFile(`documentations/components/${slug}`, version);
  }

  return loadMdxFile(`documentations/components/${slug}`, versions[0]);
}

export async function generateMetadata({
  params,
  searchParams,
}): Promise<Metadata> {
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

  const versions = loadAvailableVersions(slug);
  const source = loadDocBySlug(slug, v);
  const content = await serialize(source.content);
  const showNewVersionWarning = v ? versions[0] !== v : false;

  return (
    <VersionProvider versions={versions}>
      {showNewVersionWarning ? (
        <NewVersionWarning title={source.frontmatter.title} slug={slug} />
      ) : null}
      <MDXWrapper source={content} />
    </VersionProvider>
  );
}

export default SlugPage;
