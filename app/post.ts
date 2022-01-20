import path from 'path';
import parseFrontMatter from 'front-matter';
import { readFileSync, readdirSync, writeFileSync } from 'fs';
import invariant from 'tiny-invariant';
import { marked } from 'marked';

export type Post = {
  slug: string;
  title: string;
};

export type PostMarkdownAttributes = {
  title: string;
};

const postsPath = path.join(__dirname, '../../posts');

function isValidPostAttributes(
  attributes: any
): attributes is PostMarkdownAttributes {
  return attributes?.title;
}

type NewPost = {
  title: string;
  slug: string;
  markdown: string;
};

export function createPost(post: NewPost) {
  const md = `---\ntitle: ${post.title}\n---\n\n${post.markdown}`;
  writeFileSync(path.join(postsPath, post.slug + '.md'), md);
  return getPost(post.slug);
}

export function getPost(slug: string) {
  const filepath = path.join(postsPath, `${slug}.md`);
  const file = readFileSync(filepath);
  const { attributes, body } = parseFrontMatter(file.toString());
  invariant(
    isValidPostAttributes(attributes),
    `Post ${filepath} is missing attributes`
  );
  const html = marked(body);
  return { slug, html, title: attributes.title };
}

export function getPosts() {
  const dir = readdirSync(postsPath);
  return Promise.all(
    dir.map((filename) => {
      const file = readFileSync(path.join(postsPath, filename));
      const { attributes } = parseFrontMatter(file.toString());
      invariant(isValidPostAttributes(attributes));
      return {
        slug: filename.replace(/\.md$/, ''),
        title: attributes.title,
      };
    })
  );
}
