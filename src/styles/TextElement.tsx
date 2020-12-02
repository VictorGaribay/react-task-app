import styled from 'styled-components'

const Logo = styled.h1`
  font-weight: bold;
  font-size: 1.2em;
`

export default Logo

export const Title = styled.h1<{ hero?: boolean }>`
  color: ${({ theme, hero }) => (hero ? theme.secondary : theme.dark)};
  font-size: ${({ hero }) => (hero ? '3.5em' : '2em')};
  line-height: ${({ hero }) => (hero ? 1 : 1.6)};
  margin-bottom: ${({ hero }) => (hero ? '8px' : '24px')};
`

export const Paragraph = styled.p``
