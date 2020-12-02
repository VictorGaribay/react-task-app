import React from 'react'
import Container from 'src/styles/Containers'
import HeaderElement from 'src/styles/HeaderElement'
import Logo from 'src/styles/TextElement'
import AppLink from './AppLink'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <HeaderElement>
      <Container>
        <Logo>
          <AppLink href="/" label="Next.js" />
        </Logo>
        <nav>
          <AppLink href="/nosotros" label="About" />
          <AppLink href="/contacto" label="Contact" />
        </nav>
      </Container>
    </HeaderElement>
  )
}

export default Header
