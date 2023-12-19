import Link from 'next/link'

import { getAllPosts } from '../lib/api'

import './page.css';

export default function Blog() {
  const posts = getAllPosts()
  return (
    <main>
      <ul>
        {posts.map((post, index) => (
          <li key={index} className="page-list-item">
            <Link href={`/post/${post.slug}`}>
              <div className="title">{post.title}</div>
              <div className="description">{post.shortDescription}</div>
            </Link>
          </li>
        ))}
      </ul>
    </main >
  )
}
