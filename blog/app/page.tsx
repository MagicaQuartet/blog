import Link from 'next/link'

import { getAllPosts } from '../lib/api'

import './page.css';

function Tag({ tag, count }: { tag: string, count: number }) {
  return (
    <div className="tag">
      <div className="tag-title">{tag}</div>
      <div className="tag-count">{count}</div>
    </div>
  )
}

export default function Blog() {
  const posts = getAllPosts()
  const tags = posts.flatMap((post) => post.tags);
  const tagCountMap = tags.reduce((counts, tag) => {
    if (counts[tag] === undefined) {
      counts[tag] = 0;
    }
    counts[tag]++;
    return { ...counts };
  }, {} as { [key: string]: number });
  const tagCountList = Object.entries(tagCountMap).sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] < b[0] ? 1 : -1;
    }
    return a[1] < b[1] ? 1 : -1;
  });
  return (
    <div className="container">
      <aside className="sidebar">
        <h2 className="title">Tags</h2>
        <div className="tag-list">
          {tagCountList.map(([tag, count]) => <Tag key={tag} tag={tag} count={count} />)}
        </div>
        <div className="tag-search">
          <input type="text" id="search-input" />
        </div>
      </aside >
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
    </div >

  )
}
