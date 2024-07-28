# Blog Website

Welcome to the Blog Website! This project is built with React and deployed on Vercel. You can check out blogs, publish your own, and manage them all in one place. We've got sign up, sign in, and log out functionality too.

## Features

- **Blog Listing**: Allows you to see all the blogs at `/blogs`.
- **Blog Details**: Allows you to read the full post and see details about the author at `/blog/:id`.
- **Top Bar Navigation**:
  - Allows you to go back to `/blogs` by clicking "Medium".
  - Allows you to publish a blog at `/publish`.
  - Allows you to log out, which clears your session and takes you to `/signup`.
- **Authentication**:
  - Allows you to sign up at `/signup`.
  - Allows you to sign in at `/signin`.

## URL

Check out the live site: [https://blog-website-mypg.vercel.app/blogs](https://blog-website-mypg.vercel.app/blogs)

## Tech Stack

- **React**: Frontend library
- **Prisma**: ORM
- **Cloudflare**: For deployment
- **Hono**: Lightweight web framework
- **Zod**: Input validation

## Installation

1. Clone the repo:
   ```sh
   git clone https://github.com/your-username/blog-website.git
   cd blog-website
