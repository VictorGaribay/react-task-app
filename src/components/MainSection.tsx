import React from 'react'
import Container from 'src/styles/Containers'
import { Title } from 'src/styles/TextElement'
import PostPreview from 'src/types/PostPreview'
import PostListing from './PostListing'

interface MainSectionProps {
  posts: PostPreview[]
}

const MainSection: React.FC<MainSectionProps> = ({ posts }) => {
  return (
    <main>
      <Container>
        <Title>All posts</Title>
        <PostListing posts={posts} />
      </Container>
    </main>
  )
}

export default MainSection
