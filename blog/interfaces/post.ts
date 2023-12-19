type Post = {
  title: string
  slug: string
  writtenDate: Date
  shortDescription: string
  tags: string[]
  content: string
  [key: string]: any
}

export default Post
