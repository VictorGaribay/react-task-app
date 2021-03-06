import React from 'react'
import PostPreview from 'src/types/PostPreview'
import AppLink from './AppLink'

interface ListingItemProps {
  post: PostPreview
}

const ListingItem: React.FC<ListingItemProps> = ({ post }) => {
  return (
    <div>
      <AppLink href={`/task/${post.slug}`} label={post.title} />
      {post.excerpt && <p>{post.excerpt}</p>}
    </div>
  )
}

export default ListingItem
