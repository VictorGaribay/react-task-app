import fs from 'fs'
import matter from 'gray-matter'
import { GetStaticProps, NextPage } from 'next'
import React from 'react'
import Layout from 'src/components/Layout'
import PostListing from 'src/components/PostListing'
import PostPreview from 'src/types/PostPreview'

interface TaskProps {
  posts: PostPreview[]
}

const Task: NextPage<TaskProps> = ({ posts }) => {
  return (
    <Layout pageTitle="Home">
      <section>
        <h1>Next.js Task</h1>
        <p>Create task with Next.js and typeScript</p>
        <button>Suscribe</button>
      </section>
      <PostListing posts={posts} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<TaskProps> = async () => {
  const files = fs.readdirSync('src/_posts')
  const posts = files.map(fname => {
    const md = fs.readFileSync(`src/_posts/${fname}`).toString()
    const { data, excerpt } = matter(md, { excerpt_separator: '\n\n' })
    return {
      slug: fname.replace('.md', ''),
      title: data.title,
      excerpt
    }
  })
  return {
    props: {
      posts
    }
  }
}

export default Task
