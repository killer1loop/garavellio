import { createDirectus, rest, } from '@directus/sdk';

type Post = {
  title: string;
  date_created: string;
  tag: string;
  image: string;
  id: string;
  slug: string;
  published_date: string;
  excerpt: string;
  content: string;
}

type Schema = {
  blog: Post[];
}

const directus = createDirectus<Schema>('https://directus.backend.garavelli.io/').with(rest());

export default directus;