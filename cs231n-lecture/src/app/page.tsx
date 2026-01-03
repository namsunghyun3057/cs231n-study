import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';

export default function HomePage() {
  // lib 폴더에서 모든 포스트 가져오기
  const posts = getAllPosts();

  return (
    <main>
      <h2 style={{ marginBottom: '20px' }}>학습 기록 목록</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {posts.map((post) => (
          <li key={post.slug} style={{ marginBottom: '24px', border: '1px solid #eee', padding: '16px', borderRadius: '8px' }}>
            <Link href={`/${post.slug}`} style={{ textDecoration: 'none' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#0070f3' }}>
                {post.meta.title || post.slug}
              </h3>
            </Link>
            <p style={{ margin: '0', color: '#666' }}>
              {post.meta.description || '내용 요약이 없습니다.'}
            </p>
            <small style={{ color: '#999', display: 'block', marginTop: '8px' }}>
              {post.meta.date?.toString()}
            </small>
          </li>
        ))}
      </ul>
    </main>
  );
}