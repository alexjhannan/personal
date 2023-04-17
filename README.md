<h1 align="center">
  Adasah's personal site
</h1>

This is a frontend-only side-project built on Gatsby that I developed a while back. Most of my coding nowadays is in private repos, so I keep this around as an example of coding style and architectural leanings. I work across the stack at this point, but creating a dedicated backend to demonstrate those skills seems like a ton of work for not much of an interesting output.

Notes about the site:
- This is pretty old work! I was interested in the intersection of SVG and animations at the time, so I used this space to playground some approaches and see what worked well. Other than what's in the playground / tooling sections, it's a simple bio website without much going on.
- I developed this before learning TypeScript, so I'm relying on PropTypes, instead.
- I'm a fan of single-file components for many reasons, and I implemented that approach here by way of `styled-components`.
- The site's theme is fully modifiable and programmatic by way of leveraging CSS variables. Check out the color palette tool to modify it yourself.
- The two most complex mini-projects in here are:
  - The guitar scale visualizer, which displays where notes land for a number of different guitar scales. I play guitar and this was a fun way to play with different musical styles.
  - The gooey radial button, which is a configurable button-of-buttons UI element. This was aimed at testing the limits of interactivity in an animated SVG. It's a pretty silly design, but I learned quite a bit about the interplay of SVGs, React, and my chosen animation library `gsap` along the way.

Some plans to upgrade this site:
- It'd be nice to update everything to use TypeScript instead of PropTypes. PropTypes are just limited TypeScript with more boilerplate and fewer benefits.
- My versions of Gatsby, React, etc are so outdated – and this is causing my build to break! Ugh.
- I'd like to swap to NextJS to take advantage of their built-in API framework so that I can play around with Node more.
- I'd like to adopt Chakra here, which is my component library of choice, since it starts from a far more accessible baseline and offers a variety of stock components to choose from.

## 🚀 Quick start

**Currently broken due to out-of-date packages 😔**

This site is currently not being deployed anywhere. To run the site locally:
1. Clone the repo
1. `yarn` to install everything
1. `yarn dev`; the site should pop up automatically, or navigate to `localhost:8000`

<!-- AUTO-GENERATED-CONTENT:START -->
#### (Inherited from the Gatsby starter): 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: Gatsby is licensed under the MIT license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-default)

<!-- AUTO-GENERATED-CONTENT:END -->
