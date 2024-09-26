import { createDirectus, rest, } from '@directus/sdk';

type articles = {
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
  article: articles[];
}

const directus = createDirectus<Schema>('https://directus.backend.garavelli.io/').with(rest());

export default directus;