import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import yaml from 'js-yaml'

export interface BookPostData {
  readonly date: string
  readonly title: string
  readonly image: string
}

export interface BookPostContent extends matter.GrayMatterFile<string> {
  data: BookPostData
}

export interface JournalismusPostData {
  readonly date: string
  readonly title: string
  readonly image: string
  readonly publisher: string
  readonly url: string
  readonly type: string
}

export interface JournalismusPostContent extends matter.GrayMatterFile<string> {
  data: JournalismusPostData
}

export interface TagebuchPostData {
  readonly date: string
  readonly title: string
}

export interface TagebuchPostContent extends matter.GrayMatterFile<string> {
  data: TagebuchPostData
}

export type PostData = BookPostData | JournalismusPostData | TagebuchPostData
export type PostContent =
  | BookPostContent
  | JournalismusPostContent
  | TagebuchPostContent

export function fetchPostsOfCollection(postsDirectory): PostContent[] {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory)

  const allPostsData = fileNames
    .filter((it) => it.endsWith('.mdx'))
    .map((fileName) => {
      // Read markdown file as string
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents, {
        engines: {
          yaml: (s) => yaml.safeLoad(s, { schema: yaml.JSON_SCHEMA }) as object,
        },
      })

      const post = matterResult as PostContent

      return post
    })

  return allPostsData.sort((a, b) => {
    if (a.data.date < b.data.date) {
      return 1
    } else {
      return -1
    }
  })
}
