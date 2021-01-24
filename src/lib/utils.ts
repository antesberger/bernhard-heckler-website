import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import yaml from 'js-yaml'

export interface BookPostData {
  readonly date: string
  readonly title: string
  readonly slug: string
  readonly image: string
}

export interface BookPostContent extends matter.GrayMatterFile<string> {
  data: BookPostData
}

export interface JournalismusPostData {
  readonly date: string
  readonly title: string
  readonly slug: string
  readonly publisher: string
  readonly publisherUrl: string
}

export interface JournalismusPostContent extends matter.GrayMatterFile<string> {
  data: JournalismusPostData
}

export interface TagebuchPostData {
  readonly date: string
  readonly title: string
  readonly slug: string
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
      post.data = {
        ...(matterResult.data as PostData),
        slug: matterResult.data.slug.toLowerCase(),
      }

      const slug = fileName.replace(/\.mdx$/, '')

      // Validate slug string
      if (post.data.slug !== slug) {
        throw new Error(
          'slug field not match with the path of its content source'
        )
      }

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
