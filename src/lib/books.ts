import path from 'path'
import { PostContent, fetchPostsOfCollection } from './utils'

let postCache: PostContent[]
const postsDirectory = path.join(process.cwd(), 'src/pages/buecher')

export function getMostRecentBookPost(count: number): PostContent[] {
  const posts = postCache ?? fetchPostsOfCollection(postsDirectory)
  postCache = posts
  return posts.length > 0 ? posts.slice(0, count) : []
}

export function countPosts(): number {
  const posts = postCache ?? fetchPostsOfCollection(postsDirectory)
  return posts.length
}

export function listPostContent(page: number, limit: number): PostContent[] {
  const posts = postCache ?? fetchPostsOfCollection(postsDirectory)
  return posts.slice((page - 1) * limit, page * limit)
}
