import fs from "fs";
import matter from "gray-matter";
import path from "path";

type MDXType = {
  frontmatter: { [key: string]: any };
  content: string;
};

function loadMdxFile(pathName: string, mdxFileName: string): MDXType {
  const mdxDir = path.join(process.cwd(), pathName, mdxFileName.concat(".mdx"));

  try {
    const source = fs.readFileSync(mdxDir, { encoding: "utf-8" });
    const { content, data } = matter(source);

    return {
      content,
      frontmatter: {
        slug: mdxFileName,
        title: data.title,
        radixUI: data.radixUI,
        radixAPI: data.radixAPI,
        ...data,
      },
    };
  } catch (error) {
    return {
      content: "<p>Ops, error</p>",
      frontmatter: {},
    };
  }
}

function readAllFilesInPath(pathName: string): string[] {
  const mdxDir = path.join(process.cwd(), pathName);
  const files = fs.readdirSync(mdxDir);

  return files;
}

export { loadMdxFile, readAllFilesInPath };
