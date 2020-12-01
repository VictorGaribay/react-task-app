import React from 'react'

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer>
      <div>
        <p>&copy: ®@it0m {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}

export default Footer
