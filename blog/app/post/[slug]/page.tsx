import { getAllPosts, getPostBySlug } from '@/lib/api'
import markdownToHtml from '@/lib/markdown';
import '@/app/github-markdown-dark.css';

export default async function Post({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)
  post.content = await markdownToHtml(post.content || '')
  return (
    <div className="markdown-body">
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  )
}

export function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}
