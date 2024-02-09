---
title: "Astro is the ideal lightweight framework to build content websites"
date: "2024-02-08"
tag: "Web Development"
image: "/astro-logo-dark.png"
permalink: "astro-framework-for-content-websites"
excerpt: "Content websites, blogs, simple marketing websites can all benefit from a simpler development experience to achieve a finely tuned presentation."
---

I have recently rebuilt my personal website using [Astro 4.3](https://astro.build/). I was previously running it on [Ghost](https://ghost.org/), and before that with Next.js. I have found that the complexity of building Ghost themes for UI changes isn't ideal.

I'm a fan of the work that the Ghost team has put into building an opinionated CMS for small websites that includes email newsletters and a membership strategy.

Even though small content websites tend to have fewer requirements and customization needs than complex web apps, they at least require minor details to be adjusted. Things like authors, article meta data, typography adjustments and control over the call to action and utilities often make a difference. Ghost requires a custom theme to be built for these changes which requires a basic development knowledge.

On the other hand Next.js has shown a rapid shift to becoming a tool to build complex web apps including middleware and backend. It's amazing progress for a framework that is now extremely popular and is introducing middleware and React functions with an excellent developer experience.

## Astro makes creating a content website easy
The recent updates in Astro introduced new functionalities for multiple content collections and data types. The documentation is optimized to provide starting points to achieve the required elements just right. For example, the [Images documentation](https://docs.astro.build/en/guides/images/) shows how to use the <img> tag or the <Image> component that offers optimization features including include resizing, compression, file format and more.

Astro also includes helpers to deploy [SSR adapters](https://docs.astro.build/en/guides/server-side-rendering/) for Vercel, Netlify and Cloudflare pages. The Hybrid mode allows to mix static and SSR generated pages easily leaving it to the helpers to deal with the differences in the hosting environments.

Also, content creators will appreciate the [Markdown and MDX content types](https://docs.astro.build/en/guides/markdown-content/) which is the one I use on this website. I have a content folder and within it a blog folder. All my MD files include the Frontmatter tags for presenting article meta data correctly, and the Zod typization makes sure that I don't mess up with data types in my markdown files.

Content collections can be multiple and can have their own data types. Also, it's easy to fetch content from any headless CMS using the data fetching libraries that are well documented in CMS-specific examples provided by the Astro documentation. Fetching data from my favorite CMS Directus is very simple.

A basic integration for internazionalitazion with [i18n routing](https://docs.astro.build/en/guides/internationalization/) is also included by default, making multi-language websites very easy, unlike Ghost where the functionality isn't available at all or WordPress, where multi-language is rough and complex.