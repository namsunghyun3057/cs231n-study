import { getPostBySlug } from '@/lib/posts';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

interface Props {
  params: {
    slug: string;
  };
}

export default function PostPage({ params }: Props) {
  const { meta, content } = getPostBySlug(params.slug);

  return (
    <article className="prose lg:prose-xl mx-auto py-10">
      <header className="mb-10 border-b pb-5">
        <h1 className="text-4xl font-bold mb-2">{meta.title}</h1>
        <div className="text-gray-500">📅 {meta.date?.toString()}</div>
      </header>
      
      <div>
        <MDXRemote 
          source={content} 
          options={{
            mdxOptions: {
              remarkPlugins: [remarkMath],
              rehypePlugins: [rehypeKatex],
            },
          }}
        />
      </div>

      <div className="mt-10 pt-5 border-t">
        <a href="/" className="text-blue-500 hover:underline">← 목록으로 돌아가기</a>
      </div>
    </article>
  );
}