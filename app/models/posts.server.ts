import { faker } from '@faker-js/faker'

export type Post = {
  id: string
  title: string
  body: string
}

export const getPostById = async (id: string): Promise<Post | null> => {
  const post = posts[parseInt(id)]

  return post || null
}

export const getAllPosts = async (): Promise<Post[]> => {
  return Object.values(posts)
}

export const makePost = (id: number): Post => {
  return {
    id: id.toString(),
    title: faker.lorem.sentence(),
    body: faker.lorem.text(),
  } as Post
}

const posts: Record<number, Post> = {
  1: makePost(1),
  2: makePost(2),
  3: makePost(3),
  4: makePost(4)
}

