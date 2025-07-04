Slides : https://petal-estimate-4e9.notion.site/NextJS-Part-3-1637dfd107358090800ff3aaed7a5b3c

## 🧱 Static Site Generation (SSG) in Next.js — Explained Simply
Static Site Generation (SSG) is one of the three main data fetching strategies in Next.js:

SSR (Server-Side Rendering) | SSG (Static Site Generation) | ISR (Incremental Static Regeneration)

### 🚀 What is Static Site Generation?
With SSG, Next.js pre-renders HTML at build time, and serves the static HTML on every request.
This makes the pages super fast and cache-friendly, since they don’t need to run on the server at request time.

### 📦 Use SSG When:
1. The data doesn’t change often

2. SEO is important

3. You want ultra-fast load time

4. Example: Blogs, Docs, Marketing pages, Landing pages

## Next-Auth 

`npm install next-auth` 

#### what all we learned : 

1. login with credentials 
2. provider 
3. login with google , github , etc 
4. useSession , SessionProvider , getServiceSession 