import Link from 'next/link'

import { getAllPosts } from '../lib/api'

export default function Blog() {
  const posts = getAllPosts()
  return (
    <main>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>
            <Link href={`/post/${post.slug}`}>{post.title} - {post.writtenDate?.toString()}</Link>
          </li>
        ))}
      </ul>
    </main >
  )
}
