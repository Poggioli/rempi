import fs from "fs";
import matter from "gray-matter";
import path from "path";

function loadMdxFile(pathName: string, mdxFileName: string) {
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
    };
  }
}

export default loadMdxFile;
