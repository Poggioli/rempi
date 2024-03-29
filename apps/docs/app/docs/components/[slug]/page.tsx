import { MDXWrapper } from "@/components/MDXWrapper";
import { NewVersionWarning } from "@/components/NewVersionWarning";
import { VersionProvider } from "@/components/VersionProvider/VersionProvider";
import { getCurrentLocale } from "i18n";
import { Metadata } from "next";
import { serialize } from "next-mdx-remote/serialize";
import semverSort from "semver-sort";
import { loadMdxFile, readAllFilesInPath } from "utils/loadMdxFile";

function loadAvailableVersions(slug: string) {
  const docs: string[] = readAllFilesInPath(
    `documentations/components/${getCurrentLocale()}/${slug}`
  );
  const docsWithoutExt = docs.map((doc) => doc.replace(".mdx", ""));
  const docsSortedMoreRecentFirst = semverSort.desc(docsWithoutExt);

  return docsSortedMoreRecentFirst;
}

function loadDocBySlug(slug: string, version?: string) {
  const versions = loadAvailableVersions(slug);

  if (version && versions.includes(version)) {
    return loadMdxFile(
      `documentations/components/${getCurrentLocale()}/${slug}`,
      version
    );
  }

  return loadMdxFile(
    `documentations/components/${getCurrentLocale()}/${slug}`,
    versions[0]
  );
}

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: { [key: string]: any };
  searchParams: { [key: string]: any };
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

async function SlugPage({
  params,
  searchParams,
}: {
  params: { [key: string]: any };
  searchParams: { [key: string]: any };
}) {
  const { slug } = params;
  const { v } = searchParams;

  const versions = loadAvailableVersions(slug);
  const source = loadDocBySlug(slug, v);
  const content = await serialize(source.content);
  const showNewVersionWarning = v
    ? versions[0] !== v && versions.includes(v)
    : false;

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
