import fs from 'fs'
import matter from 'gray-matter'
import { GetStaticPaths, GetStaticProps } from 'next'
import path from 'path'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import Layout from 'src/components/Layout'

interface TaskPostProps {
  content: string
  frontmatter: {
    title: string
    author: string
    date: string
  }
}

const TaskPost: React.FC<TaskPostProps> = ({ frontmatter, content }) => {
  return (
    <Layout pageTitle={frontmatter.title}>
      {/* {JSON.stringify(frontmatter, null, 2)} */}
      <div>
        <h3>
          By {frontmatter.author} - {frontmatter.date}
        </h3>
        <h1>{frontmatter.title}</h1>
        <ReactMarkdown source={content} />
      </div>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync('src/_tasks')
  const paths = files.map(fname => ({
    params: {
      slug: fname.replace('.md', '')
    }
  }))
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps<TaskPostProps> = async ({
  params
}) => {
  const slug = params?.slug
  const md = fs.readFileSync(path.join('src/_tasks', `${slug}.md`)).toString()
  const { data, content } = matter(md)
  const date = data.date.toLocaleDateString('en-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
  return {
    props: {
      frontmatter: {
        title: data.title,
        author: data.author,
        date
      },
      content
    }
  }
}
export default TaskPost
