import fs from "fs";
import path from "path";
import matter from "gray-matter";

export function getBlogPosts(dir: string) {
    const folder = path.join(process.cwd(), "content", dir);
    const files = fs.readdirSync(folder);

    const posts = files.map((filename) => {
        const fileBlog: string = fs.readFileSync(path.join(folder, filename), "utf-8");
        const { data, content } = matter(fileBlog);
        return {
            slug: filename.replace(".md", ""),
            metadata: data, content,
        };
    });
}