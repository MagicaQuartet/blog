import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import Post from '@/interfaces/post'

const postsDirectory = path.join(process.cwd(), '_posts')
const postFields = [
  'title',
  'slug',
  'writtenDate',
  'content',
]

export const getAllPosts = () => {

  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug, postFields))
    .sort((post1, post2) => ((post1.writtenDate || 0) > (post2.writtenDate || 0) ? -1 : 1))

  return posts
}

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(slug: string, fields: string[] = postFields) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = path.join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const post = { ...data } as Post

  fields.forEach((field) => {
    if (field === 'slug') {
      post[field] = realSlug
    }

    if (field === 'writtenDate') {
      post[field] = new Date(data[field] ?? 0)
    }

    if (field === 'content') {
      post[field] = content
    }
  })

  return post
}
