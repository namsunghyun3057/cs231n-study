import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// MDX 파일들이 위치한 경로 (src/content)
const postsDirectory = path.join(process.cwd(), 'src/content');

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = path.join(postsDirectory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return { slug: realSlug, meta: data, content };
}

export function getAllPosts() {
  const slugs = getPostSlugs();
  const posts = slugs.map((slug) => getPostBySlug(slug));
  // 날짜순 정렬 등 필요한 로직 추가 가능
  return posts;
}