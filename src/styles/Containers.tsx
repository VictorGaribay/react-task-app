import styled from 'styled-components'

const Container = styled.div`
  max-width: 980px;
  margin: 0 auto;
  padding: 5px 16px;
`

export default Container

export const HeroContainer = styled.section`
  width: 100%;
  height: 500px;
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.ligth};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
