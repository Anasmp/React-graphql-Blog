import faker from 'faker';

import Post from '../models/Post';

const POSTS_TOTAL = 10;

export default async () => {
  try {
    await Post.remove();

    await Array.from({ length: POSTS_TOTAL }).forEach(async () => {
      await Post.create({
        text: faker.lorem.paragraphs(1),
      })
    });
  } catch (error) {
    throw error;
  }
}