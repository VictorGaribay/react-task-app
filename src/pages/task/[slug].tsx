import fs from 'fs'
import matter from 'gray-matter'
import { GetStaticPaths, GetStaticProps } from 'next'
import path from 'path'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import Layout from 'src/components/Layout'
import Container from 'src/styles/Containers'
import { Title } from 'src/styles/TextElement'

interface TaskPostProps {
  content: string
  excerpt: string
  frontmatter: {
    title: string
    author: string
    date: string
  }
}

const TaskPost: React.FC<TaskPostProps> = ({
  frontmatter,
  content,
  excerpt
}) => {
  return (
    <Layout pageTitle={frontmatter.title} description={excerpt}>
      {/* {JSON.stringify(frontmatter, null, 2)} */}
      <Container>
        <h3>
          By {frontmatter.author} - {frontmatter.date}
        </h3>
        <Title>{frontmatter.title}</Title>
        <ReactMarkdown source={content} />
      </Container>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync('src/_posts')
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
  const md = fs.readFileSync(path.join('src/_posts', `${slug}.md`)).toString()
  const { data, content, excerpt } = matter(md)
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
      excerpt,
      content
    }
  }
}
export default TaskPost
