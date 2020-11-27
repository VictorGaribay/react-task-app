import React from 'react'
import AppLink from './AppLink'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header>
      <AppLink href="/" label="Next.js" />
      <nav>
        <AppLink href="/nosotros" label="About" />
        <AppLink href="/contacto" label="Contact" />
      </nav>
    </header>
  )
}

export default Header
