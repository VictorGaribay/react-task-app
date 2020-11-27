import React from 'react'

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer>
      <p>&copy: ®@it0m {new Date().getFullYear()}</p>
    </footer>
  )
}

export default Footer
