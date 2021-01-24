import path from 'path'
import { PostContent, fetchPostsOfCollection } from './utils'

let postCache: PostContent[]
const postsDirectory = path.join(process.cwd(), 'src/pages/tagebuch')

export function getMostRecentPost(): PostContent | null {
  const posts = postCache ?? fetchPostsOfCollection(postsDirectory)
  postCache = posts
  return posts.length > 0 ? posts[0] : null
}

export function countPosts(): number {
  const posts = postCache ?? fetchPostsOfCollection(postsDirectory)
  return posts.length
}

export function listPostContent(page: number, limit: number): PostContent[] {
  const posts = postCache ?? fetchPostsOfCollection(postsDirectory)
  return posts.slice((page - 1) * limit, page * limit)
}
