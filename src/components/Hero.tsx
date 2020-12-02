import React from 'react'
import ButtoElement from 'src/styles/ButtonElement'
import { HeroContainer } from 'src/styles/Containers'
import { Paragraph, Title } from 'src/styles/TextElement'

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  return (
    <HeroContainer>
      <Title hero>Next.js Task</Title>
      <Paragraph>Create task with Next.js and typeScript</Paragraph>
      <ButtoElement>Suscribe</ButtoElement>
    </HeroContainer>
  )
}

export default Hero
